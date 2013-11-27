/**
 * Test for the Report an issue feature when mouse hover palce citation in english text
 *
 */
casper.test.begin('Check form open', 13, function suite(test) {
    casper.start(baseUrl + '#book/2/read/73', function() {
		test.assertHttpStatus(200);
		casper.assertAtBookReadingView(); // 4 tests here        
	}).then(function(){
        test.assertText('.page-view span.place', 'Rome', 'Rome is tokenized on page');
    }).then(function(){
        casper.mouseEvent('mouseover', '.page-view span.place');
	}).then(function(){
		test.assertVisible("#change-this-link", "Change This link is shown");
	})
    .then(function() {
        casper.click('#change-this-link button');
    }).waitForSelector('#change-this-form')
    .then(function() {
        test.assertVisible("#change-this-form", "Change This window is shown");
        test.assertText('#ctf-place-name', 'Rome', "Token is correct");
        test.assertText('#ctf-book-title', 'The Works of Cornelius Tacitus: The History', "Book title is correct");
        test.assertVisible('#ctf-page-id', "Page number is shown");
        test.assertText('#ctf-page-id', '73', "Page number is correct");
    }); 
    casper.run(function() {
        test.done();
    });
});
