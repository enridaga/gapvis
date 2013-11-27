/**
 * This file includes common code for testing
 * It have been developed with CasperJS 1.1
 **/
baseUrl = "http://localhost:8080/";
baseUrl = "http://localhost/~enricox/gapvis/";
// for easier syntax
// casper.describe = function(msg) {
//     if (this.started) {
//         this.then(function() { test.comment(msg) });
//         // let's clear the page state while we're at it
//         this.thenOpen('about:blank');
//     } else {
//         t.comment(msg);
//     }
//     return this;
// };

// helpers
casper.waitForSelector = function(selector, msg, negate) {
    msg = msg || 'Selector ' + selector + ' found';
    this.waitFor(function() {
        var toBool = negate ? '!' : '!!';
            f = new Function("return " + toBool + "$('" + selector + ":visible').length");
        return casper.evaluate(f)
    }, function() {
		casper.test.pass(msg);
    },  function() {
		casper.test.fail(msg);
    });
    return this;
};

casper.waitForSelectorToLeave = function(selector, msg) {
    msg = msg || 'Selector ' + selector + ' is gone';
    return this.waitForSelector(selector, msg, true);
}

casper.waitForInfoWindow = function(msg) {
    return this.waitForSelector('div.infowindow', msg || "Info window is open");
};
casper.waitForInfoWindowClose = function(msg) {
    return this.waitForSelector('div.infowindow', msg || "Info window is closed", true);
};

casper.closeInfoWindow = function() {
    // no way to easily access the close button
    this.evaluate(function() { 
        gv.app.currentView.slots['.right-panel'].slots['.top-slot'].tm.map.closeBubble(); 
    });
    return this;
};

    
// extend the tester with some custom assertions

casper.test.assertText = function(selector, expected, message) {
    f = new Function("return $('" + selector + "').first().text().trim()");
	casper.test.assertEvalEquals(f, expected, message);
}


casper.test.assertInText = function(selector, expected, message) {
    f = new Function("return $('" + selector + "').first().text().trim()");
    var text = casper.evaluate(f);
	casper.test.assert(text.indexOf(expected) >= 0, message);
}

casper.test.assertVisible = function(selector, message) {
    f = new Function("return !!$('" + selector + ":visible').length")
	casper.test.assertEval(f, message);
}
casper.test.assertNotVisible = function(selector, message) {
    f = new Function("return !$('" + selector + ":visible').length")
	casper.test.assertEval(f, message);
}
casper.test.assertDoesNotExist = function(selector, message) {
    f = new Function("return !$('" + selector + "').length");
	casper.test.assertEval(f, message);
}

casper.test.assertRoute = function(expected, message) {
    var getHash = function() {
        return window.location.hash.substr(1);
    };
    if (expected instanceof RegExp) {
		casper.test.assertMatch(casper.evaluate(getHash), expected, message);
    } else {
		casper.test.assertEvalEquals(getHash, expected, message);
    }
};

// Assertions about app-specific UI components
casper.test.assertInfoWindow = function(expected, message) {
	casper.test.assertText('div.infowindow h3', expected + ' (Zoom In)', message);
};

casper.test.assertPermalink = function(expected, message) {
    var permalink = casper.evaluate(function() { return $('a.permalink:visible').attr('href') });
	casper.test.assertMatch(permalink, expected, message);
}


casper.test.assertMessage = function(expected, message) {
	casper.test.assertVisible('#message-view .alert span',
        "Message is shown");
    var text = casper.evaluate(function() { 
        return $('#message-view .alert span').text().trim(); 
    });
    if (expected instanceof RegExp) {
		casper.test.assertMatch(text, expected, message);
    } else {
		casper.test.assertEquals(text, expected, message);
    }
}

// bundled assertions

casper.assertAtView = function(viewName, route, view, selector) {
    selector = selector || view;
    this.waitForSelector('div.top.' + selector, viewName + " is visible")
        .waitForSelector('div.top.' + selector + ' h2', viewName + " header is visible")
        .then(function() {
			casper.test.assertEvalEquals(function() { return gv.state.get('view'); }, view,
                "State set correctly for " + viewName);
			casper.test.assertRoute(route, "Route correct for " + viewName);
        });
    return this;
};
casper.assertAtIndexView = function() {
    return this.assertAtView("Index view", 'index', 'index', 'index-view');
};
casper.assertAtBookSummaryView = function() {
    return this.assertAtView("Book summary", /^book\/\d+/, 'book-summary', 'summary-view');
};
casper.assertAtBookReadingView = function() {
    return this.assertAtView("Reading view", /^book\/\d+\/read/, 'reading-view');
};
casper.assertAtBookPlaceView = function() {
    return this.assertAtView("Place detail view", /^book\/\d+\/place\/\d+/, 'place-view');
};