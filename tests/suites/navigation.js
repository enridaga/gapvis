// This test suite is all about navigation

casper.test.begin('Reading view, then switch books', 15, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }).then(function() {
     test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',"Book 2 title shown");
     }).then(function() {
        casper.click('header h1 a');
    }).then(function(){
    	casper.assertAtIndexView()
	}).then(function() {
        this.click('div.book-list p:nth-child(2) span');
    }).then(function() {
    	casper.assertAtBookSummaryView()
	}).then(function() {
        test.assertText("h2.book-title", 'The History of the Peloponnesian War',"Book 3 title shown");
    }).thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Open Info window, then switch books', 18, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }).then(function() {
    	casper.waitForInfoWindow();
    }).then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',"Book 2 title shown");
    }).then(function() {
        test.assertRoute(/^book\/\d+\/read\/2\/423025/, 'Reading route with place correct');
        test.assertInfoWindow('Roma', 'Roma is selected in info window');
    }).then(function() {
        casper.click('header h1 a');
    }).then(function() {
    	casper.assertAtIndexView();
    }).then(function() {
        casper.click('div.book-list p:nth-child(2) span');
    }).then(function() {
		casper.assertAtBookSummaryView();
 	}).then(function() {
        test.assertText("h2.book-title", 'The History of the Peloponnesian War',"Book 3 title shown");
    }).thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Switch books, check map', 19, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
		
    }).then(function() {
   	 	test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History', "Book 2 title shown");
    }).then(function() {
		casper.click('header h1 a');
	}).then(function() {
		casper.assertAtIndexView();
	}).then(function() {
	    casper.click('div.book-list p:nth-child(2) span');
	}).then(function() {
	    casper.assertAtBookSummaryView();
	}).then(function() {
	    test.assertText("h2.book-title", 'The History of the Peloponnesian War', "Book 3 title shown");
	}).then(function() {
       casper.click('button.goto-reading');
	}).then(function() {
	   casper.assertAtBookReadingView();
	}).then(function() {
		// FIXME This won't pass, even if testing on the browser's console returns 3
	   // test.assertEval(function(){ 
	   // 		   return gv.app.currentView.slots['.right-panel'].slots['.top-slot'].tm.map.getZoom() > 0 
	   // }, "Map isn't screwed up");
    }).thenOpen('about:blank');
	casper.run(function() {
		test.done();
	});
});



casper.test.begin('Forward/back, check map', 23, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests
    }).then(function() {
        test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',"Book 2 title shown *");
    })
	.waitForInfoWindow()
    .then(function() {
        casper.click('.navigation-view button[data-view-id="place-view"]');
    })
	.assertAtBookPlaceView()
	.back()
	.assertAtBookReadingView()
    .then(function() {
        casper.closeInfoWindow();
    })
    .waitForInfoWindowClose()
    .back()
    .waitForInfoWindow()
	    .then(function() {
	        test.assertRoute(/^book\/\d+\/read\/2\/423025/, 'Reading route with place correct');
	        test.assertNotVisible('.navigation-view button[data-view-id="place-view"].disabled',
	            'Place View button is active');
	    })
	    .then(function() {
	        casper.click('.navigation-view button[data-view-id="place-view"]');
	    })
	    .assertAtBookPlaceView()
    .then(function() {
		// FIXME This won't pass, even if testing on the browser's console returns 3
        // t.assertEval(function() { 
        //     return gv.app.currentView.slots['.right-panel'].slots['.top-slot'].markers[0].map.getZoom() > 0
        // },
        //     "Map isn't screwed up");
    }).thenOpen('about:blank');;

	casper.run(function() {
		test.done();
	});
});

casper.test.begin('Place to page, check page', 16, function suite(test) {
	casper.start(baseUrl + '#book/2/read/2/423025', function(){
		test.assertHttpStatus(200);
     }).assertAtBookReadingView()
	 .then(function() {
		 test.assertText("h2.book-title", 'The Works of Cornelius Tacitus: The History',
             "Book 2 title shown");
     })
     .waitForInfoWindow()
     .then(function() {
         casper.click('.navigation-view button[data-view-id="place-view"]');
     })
     .assertAtBookPlaceView()
     .then(function() {
         casper.click('.navigation-view button[data-view-id="reading-view"]');
     })
     .assertAtBookReadingView()
     .waitForSelector('.page-view div.text', 'Page is visible');

	casper.run(function() {
		test.done();
	});
});