// Tests about the summary view

// var t = casper.test,
//     baseUrl = "http://localhost:8080/",
//     summaryUrl = baseUrl + '#book/2';
//     
// casper.start();

// Basic page tests
casper.test.begin('Book summary page', 12, function suite(test) {
	casper.start(baseUrl + '#book/2', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookSummaryView()
    .then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        test.assertExists("div.right-panel div svg",
            "Frequency bars SVG found");
        test.assertEval(function() { return $("div.right-panel div svg rect").length > 6000 },
            "Frequency bars have been rendered");
        test.assertText("div.text-slot span.place", 'Roma',
            "Top-frequency place is correct (span)");
        test.assertText("div.right-panel div svg text", 'Roma',
            "Top-frequency place is correct (bars)");
        test.assertVisible('div.navigation-view button[data-view-id="book-summary"].active',
            'Book Summary button is active');
        test.assertPermalink(RegExp(baseUrl + '#book/2\\?'),
            "Permalink is correct");
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
    
casper.test.begin('Book summary page > Nav button', 9, function suite(test) {
	casper.start(baseUrl + '#book/2', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookSummaryView()
    .then(function() {
        this.click('div.navigation-view button[data-view-id="reading-view"]');
    })
    .assertAtBookReadingView()
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
    
    
casper.test.begin('Book summary page > Go To Reading View button', 9, function suite(test) {
	casper.start(baseUrl + '#book/2', function(){
		test.assertHttpStatus(200);
	})
	.assertAtBookSummaryView()
    .then(function() {
        this.click('button.goto-reading');
    })
    .assertAtBookReadingView()
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
    

casper.test.begin('Book summary page > Freq bars click', 11, function suite(test) {
	casper.start(baseUrl + '#book/2', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookSummaryView()
    .then(function() {
        this.click("div.right-panel div svg rect");
    })
    .assertAtBookReadingView()
    .waitForInfoWindow()
    .then(function() {
        test.assertInfoWindow('Roma', 'Roma is selected');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
    

casper.test.begin('Book summary page > Map items', 11, function suite(test) {
	casper.start(baseUrl + '#book/2', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookSummaryView()
    .then(function() {
        // this is ugly
        test.assertEval(function() { return gv.app.currentView.slots['.left-panel'].markers.length > 10; },
            "Some markers are loaded on the map");
        // this is really ugly
        this.evaluate(function() {
            var marker = gv.app.currentView.slots['.left-panel'].markers[0];
            google.maps.event.trigger(marker, 'click');
        });
    })
    .assertAtBookPlaceView()
    .then(function() {
        test.assertText('.place-summary-view h3', 'Roma', 'Roma is selected');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
    