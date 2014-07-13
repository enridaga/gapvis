// HESTIA SETTINGS
API_ROOT = 'http://gap2.alexandriaarchive.org';
REPORT_URL = 'http://gap2.alexandriaarchive.org/flags/';
API_DATA_TYPE = 'json';
DEBUG = false;
// if present and not null, makes a direct link isntead of a form. Looks for {token-id}
//REPORT_BAD_TOKEN_URL = "http://gap2.alexandriaarchive.org/report/token-issues/{token-id}";
VIEW_ON = "Search or download the full text via the Perseus Classical Library"
VIEW_ON_LINK = function(uri, page){
	// uri is the link to the book page on the origin repository
	// page is the page number (eg, 1, 3, -13) or reference (eg. 1.1, 4.5)
	// Implement here how to build a more detailed link
	
	// XXX This is the default (do nothing)
	//return uri;
	
	// XXX This is an example for Perseus repository
	// uri is something like http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0126
	if(page.indexOf('.')!=-1){
		page = page.split('.');
		return uri + '%3Abook%3D' + page[0] + '%3Achapter%3D' + page[1] + '%3A';		
	}else{
		return uri;
	}
};
PLACE_THEME = "frequency"; // Supported values are 'frequency' and 'feature'. If the value is set to 'feature' then places should have a 'type' property set to one of the following values: "REGION", "SETTLEMENT", "NATURAL_FEATURE"