// Tests for the "Place view page"
 
casper.test.begin('Place View page', 8, function suite(test) {
	casper.start(baseUrl + '#book/2/place/423025', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookPlaceView(); // 4 tests
	}).then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        test.assertPermalink(RegExp(baseUrl + '#book/2/place/423025\\?'),
            "Permalink is correct");
        test.assertVisible('div.navigation-view button[data-view-id="place-view"].active',
            'Place Detail button is active');
    }).thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Place View page > Summary', 8, function suite(test) {
	casper.start(baseUrl + '#book/2/place/423025', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookPlaceView(); // 4 tests
	}).then(function() {
        test.assertText('.place-summary-view h3', 'Roma',
            "Place title shown in summary");
        test.assertExists('.place-summary-view svg rect',
            "Frequency bars shown in summary");
        test.assertEvalEquals(function() {
                return $('.place-summary-view li a').first().attr('href');
            }, 'http://pleiades.stoa.org/places/423025',
            'Pleiades URI correct');
    }).thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Place View page > Map', 10, function suite(test) {
	casper.start(baseUrl + '#book/2/place/423025', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookPlaceView(); // 4 tests
	}).then(function() {
        test.assertEval(function() {
                return gv.app.currentView
                    .slots['.right-panel']
                    .slots['.top-slot']
                    .markers.length == 9; 
            },
            "Some markers are loaded on the map");
        // this is really ugly
        this.evaluate(function() {
            var marker = gv.app.currentView.slots['.right-panel'].slots['.top-slot'].markers[3];
            google.maps.event.trigger(marker, 'click');
        });
		
	}).waitForSelectorToLeave('.place-summary-view h3:contains(Roma)')
    .then(function() {
        test.assertRoute('book/2/place/1027',
            "Route is correct");
        test.assertPermalink(RegExp(baseUrl + '#book/2/place/1027\\?'),
            "Permalink is correct");
        test.assertText('.place-summary-view h3', 'Hispania',
            "Place title shown in summary");
    }).thenOpen('about:blank');;
	casper.run(function() {
		test.done();
	});
});


casper.test.begin('Place View page > Related Places', 11, function suite(test) {
	casper.start(baseUrl + '#book/2/place/423025', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookPlaceView(); // 4 tests
	}).then(function() {
        test.assertText('.related-places-view p:nth-child(4)', 'Hispania (6)',
            "Related places shown");
    })
    .then(function() {
        this.click('.related-places-view p:nth-child(4) span');
    })
    .waitForSelectorToLeave('.place-summary-view h3:contains(Roma)')
    .then(function() {
        test.assertRoute('book/2/place/1027',
            "Route is correct");
        test.assertPermalink(RegExp(baseUrl + '#book/2/place/1027\\?'),
            "Permalink is correct");
        test.assertText('.place-summary-view h3', 'Hispania',
            "Place title shown in summary");
        test.assertText('.related-places-view p:nth-child(2)', 'Zella (8)',
            "Related places have been re-rendered");
    }).thenOpen('about:blank');;
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Place View page > Book references', 25, function suite(test) {
	casper.start(baseUrl + '#book/3/place/1052', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookPlaceView(); // 4 tests
	})
    .then(function() {
        test.assertText("h2.book-title", 'The History of the Peloponnesian War',
            "Book title shown");
        test.assertText('.book-refs-view p span.book-title', 'The Works of Cornelius Tacitus: The History',
            "Book reference was found");
    })
    .then(function() {
        casper.click('.book-refs-view p span.book-title');
    })
    .waitForSelectorToLeave('h2.book-title h3:contains(Peloponnesian)')
    .assertAtBookPlaceView()
    .then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        test.assertRoute('book/2/place/1052',
            'Book place route correct');
        test.assertPermalink(RegExp(baseUrl + '#book/2/place/1052\\?'),
            "Permalink is correct");
        test.assertText('.book-refs-view p span.book-title', 'The History of the Peloponnesian War',
            "Book reference was found");
    })
    .then(function() {
        casper.click('.book-refs-view p span.book-title');
    })
    .waitForSelectorToLeave('h2.book-title h3:contains(Tacitus)')
    .assertAtBookPlaceView()
    .then(function() {
        test.assertText("h2.book-title", 'The History of the Peloponnesian War',
            "Book title shown");
        test.assertRoute('book/3/place/1052',
            'Book place route correct');
        test.assertPermalink(RegExp(baseUrl + '#book/3/place/1052\\?'),
            "Permalink is correct");
        test.assertText('.book-refs-view p span.book-title', 'The Works of Cornelius Tacitus: The History',
            "Book reference was found");
    }).thenOpen('about:blank');;
	casper.run(function() {
		test.done();
	});
});
/*
var t = casper.test,
    baseUrl = "http://localhost:8080/",
    viewUrl = baseUrl + '#book/2/place/423025';

    
casper
    .describe('Place View page > Book references')
    .thenOpen(baseUrl + '#book/3/place/1052')
    .assertAtBookPlaceView()
    .then(function() {
        t.assertText("h2.book-title", 'The History of the Peloponnesian War',
            "Book title shown");
        t.assertText('.book-refs-view p span.book-title', 'The Works of Cornelius Tacitus: The History',
            "Book reference was found");
    })
    .then(function() {
        casper.click('.book-refs-view p span.book-title');
    })
    .waitForSelectorToLeave('h2.book-title h3:contains(Peloponnesian)')
    .assertAtBookPlaceView()
    .then(function() {
        t.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        t.assertRoute('book/2/place/1052',
            'Book place route correct');
        t.assertPermalink(RegExp(baseUrl + '#book/2/place/1052\\?'),
            "Permalink is correct");
        t.assertText('.book-refs-view p span.book-title', 'The History of the Peloponnesian War',
            "Book reference was found");
    })
    .then(function() {
        casper.click('.book-refs-view p span.book-title');
    })
    .waitForSelectorToLeave('h2.book-title h3:contains(Tacitus)')
    .assertAtBookPlaceView()
    .then(function() {
        t.assertText("h2.book-title", 'The History of the Peloponnesian War',
            "Book title shown");
        t.assertRoute('book/3/place/1052',
            'Book place route correct');
        t.assertPermalink(RegExp(baseUrl + '#book/3/place/1052\\?'),
            "Permalink is correct");
        t.assertText('.book-refs-view p span.book-title', 'The Works of Cornelius Tacitus: The History',
            "Book reference was found");
    });
    
casper
    .describe('Place View page > Book references (none found)')
    .thenOpen(viewUrl)
    .assertAtBookPlaceView()
    .then(function() {
        t.assertText('.book-refs-view p', 'No other book references were found.',
            "Book references were not found");
    });
    
    
casper.run(function() {
    t.done();
});
*/