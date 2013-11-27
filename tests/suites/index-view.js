/**
 * This test is for the index page
 */
casper.test.begin('Index page', 17, function suite(test) {
    casper.start(baseUrl, function() {
		test.assertHttpStatus(200);
		casper.assertAtIndexView(); // 4 tests here
        test.assertTitle("GapVis: Visual Interface for Reading Ancient Texts", 
            "Loaded application");

	}).then(function(){
        test.assertText("h2", "Overview", "Index page title is visible");
        test.assertEvalEquals(new Function("{ return $('div.book-list p').length;}"), 2, "Two books were found");
        test.assertText('div.book-list p span', 'The Works of Cornelius Tacitus: The History',
            "The first book has the right title");

    }).then(function(){
        casper.click('div.book-list p span');
	    casper.assertAtBookSummaryView();
	    casper.back();
	    casper.assertAtIndexView();	
    });
    casper.run(function() {
        test.done();
    });
});
