// About the reading view
casper.test.begin('Reading View page', 12, function suite(test) {
	casper.start(baseUrl + '#book/2/read/-2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }) .assertAtBookReadingView()
    .then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        test.assertPermalink(RegExp(baseUrl + '#book/2/read/-2\\?'),
            "Permalink is correct");
        test.assertVisible('div.navigation-view button[data-view-id="reading-view"].active',
            'Reading View button is active');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Reading View page > Next/Prev', 32, function suite(test) {
	casper.start(baseUrl + '#book/2/read/-2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }) .assertAtBookReadingView()
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/-2/, 'Book reading route correct');
        test.assertInText('.page-view div.text:visible', 'Page Negative Two Text.',
            'Page -2 text is shown');
        test.assertDoesNotExist('.nextprev .prev.on',
            'Previous link is disabled');
        test.assertExists('.nextprev .next.on',
            'Next link is enabled');
    })
    .then(function() {
        this.click('.nextprev .next.on');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/1/, 'Book reading route correct');
        test.assertInText('.page-view div.text:visible', 'Page One Text.',
            'Page 1 text is shown');
        test.assertExists('.nextprev .prev.on',
            'Previous link is enabled');
        test.assertExists('.nextprev .next.on',
            'Next link is enabled');
    })
    .then(function() {
        this.click('.nextprev .next.on');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/2/, 'Book reading route correct');
        test.assertInText('.page-view div.text:visible', 'Page Two Text.',
            'Page 2 text is shown');
        test.assertExists('.nextprev .prev.on',
            'Previous link is enabled');
        test.assertExists('.nextprev .next.on',
            'Next link is enabled');
    })
    .then(function() {
        this.click('.nextprev .prev.on');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/1/, 'Book reading route correct');
        test.assertInText('.page-view div.text:visible', 'Page One Text.',
            'Page 1 text is shown');
        test.assertExists('.nextprev .prev.on',
            'Previous link is enabled');
        test.assertExists('.nextprev .next.on',
            'Next link is enabled');
    })
    .then(function() {
        this.click('.nextprev .prev.on');
    })
    .wait(300)
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/-2/, 'Book reading route correct');
        test.assertInText('.page-view div.text:visible', 'Page Negative Two Text.',
            'Page -2 text is shown');
        test.assertDoesNotExist('.nextprev .prev.on',
            'Previous link is disabled');
        test.assertExists('.nextprev .next.on',
            'Next link is enabled');
    })
    .thenOpen(baseUrl + '#book/2/read/385', function() {
        test.assertInText('.page-view div.text:visible', 'Last Page Text.',
            'Last page text is shown');
        test.assertDoesNotExist('.nextprev .next.on',
            'Next link is disabled');
        test.assertExists('.nextprev .prev.on',
            'Previous link is enabled');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});


casper.test.begin('Reading View page > Page Nav Field', 18, function suite(test) {
	casper.start(baseUrl + '#book/2/read/-2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }) .then(function() {
        test.assertEvalEquals(function() { return $('input.page-id').val() }, "-2",
            "Nav form is correct");
    })
    .then(function() {
        this.click('.nextprev .next.on');
    })
    .then(function() {
        test.assertEvalEquals(function() { return $('input.page-id').val() }, "1",
            "Nav form updates on next");
    })
    .thenOpen(baseUrl + '#book/2/read/385', function() {
        test.assertEvalEquals(function() { return $('input.page-id').val() }, "385",
            "Nav form updates on route change");
    })
    .then(function() {
        this.evaluate(function() { $('input.page-id').val('133').change() })
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/133/, 'Book reading route correct');
    })
    .then(function() {
	    function testNavField(input, expected) {
	               casper.evaluate(function(inp) { $('input.page-id').val(inp).change() },
	                   { test: input });
	               test.assertMessage("Sorry, there isn't a page '" + input + "' in this book.",
	                   "Nav error message shown");
	               test.assertEvalEquals(function() { return $('input.page-id').val() }, expected,
	                   "Nav form won't accept an invalid page: " + input);
	           }    
	           testNavField('spam', '133');
	           testNavField('200', '133');
	           testNavField('', '133');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});


casper.test.begin('Reading View page > Page View Controls', 22, function suite(test) {
	casper.start(baseUrl + '#book/2/read/-2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    })
    .assertAtBookReadingView()
    .then(function() {
        test.assertPermalink(/pageview=text/,
            "Page view setting correct in permalink");
        test.assertVisible('.page-view div.text', 
            'Page text is visible');
        test.assertNotVisible('.page-view div.img', 
            'Page image is not visible');
        test.assertDoesNotExist('.imagetoggle .showtext.on',
            'Show Text link is disabled');
        test.assertExists('.imagetoggle .showimg.on',
            'Show Image link is enabled');
    })
    .then(function() {
        this.click('.imagetoggle .showimg.on');
    })
    .then(function() {
        test.assertPermalink(/pageview=image/,
            "Page view setting correct in permalink");
        test.assertNotVisible('.page-view div.text', 
            'Page text is not visible');
        test.assertVisible('.page-view div.img', 
            'Page image is visible');
        test.assertExists('.imagetoggle .showtext.on',
            'Show Text link is enabled');
        test.assertDoesNotExist('.imagetoggle .showimg.on',
            'Show Image link is disabled');
        test.assertText('.page-view div.img:visible', '(No image available)',
            'No image available message shown');
    })
    .then(function() {
        test.assertVisible('.nextprev .next.on', 
            'Next button is active');
        this.click('.nextprev .next.on');
    })
    .then(function() {
        test.assertVisible('.page-view div.img img', 
            'Page image is visible (actual file)');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});


casper.test.begin('Reading View page > Places in Page Text', 10, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }).then(function() {
        test.assertVisible('.page-view div.text span.place[data-place-id="423025"]',
            'Roma is shown in the page text');
        this.click('.page-view div.text span.place[data-place-id="423025"]');
    })
    .waitForInfoWindow()
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/2\/423025/, 'Reading route with place correct');
        test.assertInfoWindow('Roma', 'Roma is selected in info window after click');
        test.assertVisible('.page-view div.text span.place.hi[data-place-id="423025"]',
            'Roma is highlighted in the page text');
	})
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Reading View page > Places in Page Text (Selected Place)', 9, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
    })
	.assertAtBookReadingView()
	.waitForInfoWindow()
	.then(function() {
    	test.assertRoute(/^book\/\d+\/read\/2\/423025/, 'Reading route with place correct');
    	test.assertInfoWindow('Roma', 'Roma is selected in info window after click');
    	test.assertVisible('.page-view div.text span.place.hi[data-place-id="423025"]',
        'Roma is highlighted in the page text');
	})
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Reading View page > Timemap', 31, function suite(test) {
	casper.start(baseUrl + '#book/2/read/-2', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookReadingView()
    .then(function() {
        test.assertEval(function() {
            window.tm = gv.app.currentView.slots['.right-panel'].slots['.top-slot'].tm;
            return !!window.tm;
        }, "TimeMap object found");
        test.assertEval(function() {
            return window.tm.getItems().length > 0;
        }, "Some items are loaded on the timemap");
        test.assertVisible('div.timeline-date-label:contains("-2")',
            "The first date label is visible");
        test.assertVisible('#label-tl-0-0-e9',
            "The ninth event is visible");
        test.assertText('#label-tl-0-0-e9', 'Roma',
            "Ninth event label is correct");
        test.assertNotVisible('div.infowindow',
            "The info window is closed");
    })
    .then(function() {
        this.mouseEvent('mousedown', '#label-tl-0-0-e9');
    })
    .waitUntilVisible('div.infowindow')
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/2\/423025/, 'Route with place correct');
        test.assertInfoWindow('Roma', 'Roma is selected in info window after click');
        test.assertExists('div.infowindow svg rect',
            "Frequency bars shown in info window");
        test.assertExists('div.infowindow svg rect.selected:nth-child(3)',
            "Correct frequency bar is selected");
        test.assertDoesNotExist('div.infowindow span.prev.on',
            'Infowindow previous link is disabled');
        test.assertExists('div.infowindow span.next.on',
            'Infowindow next link is disabled');
        test.assertVisible('.page-view div.text span.place.hi[data-place-id="423025"]',
            'Roma is highlighted in the page text');
    })
    .then(function() {
        this.click('div.infowindow span.next.on');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/5\/423025/, 'Route with place and next page correct');
        test.assertInfoWindow('Roma', 'Roma is still selected in info window');
        test.assertExists('div.infowindow span.prev.on',
            'Infowindow previous link is enabled');
        test.assertExists('div.infowindow span.next.on',
            'Infowindow next link is disabled');
        test.assertVisible('.page-view div.text span.place.hi[data-place-id="423025"]',
            'Roma is highlighted in the page text');
    })
    .then(function() {
        this.click('div.infowindow span.next.on');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/8\/423025/, 'Route with place and next page correct');
        test.assertInfoWindow('Roma', 'Roma is still selected in info window');
        test.assertVisible('.page-view div.text span.place.hi[data-place-id="423025"]',
            'Roma is highlighted in the page text');
        test.assertExists('div.infowindow svg rect.selected:nth-child(4)',
            "Correct frequency bar is selected");
    })
    .then(function() {
        this.click('div.infowindow span.prev.on');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/5\/423025/, 'Route with place and next page correct');
        test.assertInfoWindow('Roma', 'Roma is still selected in info window');
    })
    .then(function() {
        this.click('div.infowindow svg rect:nth-child(5)');
    })
    .then(function() {
        test.assertRoute(/^book\/\d+\/read\/23\/423025/, 'Route with place and next page correct');
        test.assertInfoWindow('Roma', 'Roma is still selected in info window');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});


casper.test.begin('Reading View page > Selected Place', 29, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookReadingView()
    .waitForInfoWindow()
    .then(function() {
        test.assertInfoWindow('Roma', 'Roma is selected in info window');
        test.assertDoesNotExist('div.navigation-view button[data-view-id="place-view"].disabled',
            'Place Details button is active');
    })
    .then(function() {
        this.click('div.infowindow span.goto-place');
    })
    .assertAtBookPlaceView()
    .then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        test.assertText('.place-summary-view h3', 'Roma',
            "Place title shown in summary");
        test.assertPermalink(RegExp(baseUrl + '#book/2/place/423025\\?'),
            "Permalink is correct");
    })
    .back()
    .assertAtBookReadingView()
    .waitForInfoWindow()
    .then(function() {
        test.assertRoute("book/2/read/2/423025", 'Reading details route correct');
        test.assertInfoWindow('Roma', 'Roma is still selected in info window');
    })
    .then(function() {
        this.click('div.navigation-view button[data-view-id="place-view"]');
    })
    .assertAtBookPlaceView()
    .then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
            "Book title shown");
        test.assertText('.place-summary-view h3', 'Roma',
            "Place title shown in summary");
        test.assertPermalink(RegExp(baseUrl + '#book/2/place/423025\\?'),
            "Permalink is correct");
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
    

casper.test.begin('Reading View page > Info Window closing back/forward', 18, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
	})
    .assertAtBookReadingView()
    .waitForInfoWindow()
    .then(function() {
        test.assertInfoWindow('Roma', 'Roma is selected in info window');
        test.assertDoesNotExist('div.navigation-view button[data-view-id="place-view"].disabled',
            'Place Details button is active');
    })
    .then(function() {
        this.closeInfoWindow();
    })
    .waitForInfoWindowClose()
    .then(function() {
        test.assertRoute(/^book\/2\/read\/2$/, 'Reading route correct, no place');
        test.assertDoesNotExist('div.infowindow',
            'Info window is closed');
        test.assertExists('div.navigation-view button[data-view-id="place-view"].disabled',
            'Place Details button is disabled');
    })
    .back()
    .waitForInfoWindow('Info window re-opens on back')
    .then(function() {
        test.assertInfoWindow('Roma', 'Roma is selected in info window');
        test.assertDoesNotExist('div.navigation-view button[data-view-id="place-view"].disabled',
            'Place Details button is active');
    })
    .forward()
    .then(function() {
        test.assertRoute(/^book\/2\/read\/2$/, 'Reading route correct, no place');
        test.assertDoesNotExist('div.infowindow',
            'Info window is closed');
        test.assertExists('div.navigation-view button[data-view-id="place-view"].disabled',
            'Place Details button is disabled');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Reading View page > Info Window closing - place page interaction', 18, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
	})
	.assertAtBookReadingView()
    .waitForInfoWindow()
    .then(function() {
        this.click('div.infowindow span.goto-place');
    })
    .assertAtBookPlaceView()
    .back()
    .assertAtBookReadingView()
    .then(function() {
        this.closeInfoWindow();
    })
    .waitForInfoWindowClose()
    .back()
    .waitForInfoWindow('Info window re-opens on back')
    .then(function() {
        test.assertInfoWindow('Roma', 'Roma is selected in info window');
        test.assertDoesNotExist('div.navigation-view button[data-view-id="place-view"].disabled',
            'Place Details button is active');
    })
	.thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});
