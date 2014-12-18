# GapVis

**DISCLAIMER: This fork is ongoing work. Last official code is at https://github.com/googleancientplaces/gapvis**

### About

GapVis is part of the [Google Ancient Places project](http://googleancientplaces.wordpress.com/). You can read more about some of the technical considerations and the design process here:

 * [Building a Single-Page Application for GAP, Part 1](http://googleancientplaces.wordpress.com/2011/10/05/building-a-single-page-application-for-gap-part-1/)
 * [Building a Single-Page Application for GAP, Part 2](http://googleancientplaces.wordpress.com/2011/10/13/building-a-single-page-application-for-gap-part-2/)
 * [Designing a Visual Interface for GAP Texts](http://googleancientplaces.wordpress.com/2011/10/25/designing-a-visual-interface-for-gap-texts/)
 
Comments and questions welcomed at nick (at) nickrabinowitz (dot) com.

### Use it

* Download a packaged dist from [https://github.com/enridaga/gapvis/releases](https://github.com/enridaga/gapvis/releases)
* Unpack the folder
* Edit the config/settings.productions.js file to point to your data service
* Deploy it on your Web Server

### API specification
This section describes what a data provider must implement to use GapVis as visualization tool.

#### /books/.json
List of available books, with core metadata:

    [
        {
            "id":"1",
            "title":"Dictionary of Greek and Roman Geography",
            "uri":"http:\/\/www.google.com\/books?id=-C0BAAAAQAAJ",
            "author":"Labadius-Zymethus",
            "printed":"1857"
        },
        {
            "id":"2",
            "title":"The Works of Cornelius Tacitus: The History",
            "uri":"http:\/\/www.google.com\/books?id=2X5KAAAAYAAJ",
            "author":"Cornelius Tacitus","printed":"1805"
        }, ...
    ]

See also:
    http://gap.alexandriaarchive.org/books/.json

#### /books/&lt;book_id&gt;.json
Book info, with metadata and a list of pages with place refs and a list of places appearing here, with core data only:

	{
		"id":"1",
		"title":"Dictionary of Greek and Roman Geography",
		"uri":"http:\/\/www.google.com\/books?id=-C0BAAAAQAAJ",
		"author":"Labadius-Zymethus",
		"printed":"1857",
		"pages":[
			{
				"id":-7,
				"places": [148142,157894,197448,216904,246539, ... ]
			}, ...
		],
		"places":[
			{
				"id":766,
				"title":
				"Aegyptus",
				"ll":[
					32.5,
					32.5
				]
			}, ...
		],
		"texts":[
			{
				"lang": "grc",
				"label": "Ancient Greek"
			}
		]
	}

The "texts" attribute is optional. Use it to declare there are alternative texts in addition to the default (see next section).

See also:
    http://gap.alexandriaarchive.org/books/1.json

#### /book/&lt;book_id&gt;/page/&lt;page_id&gt;.json
Page info, including text - id either number or other id scheme (note the syntax for marking place references in the HTML text). It is also possible to provide additional texts using the "text@lang" attribute name: 

    {
        "text":" IASPIS. <span class=\"place\" data-place-id=\"216846\" >IATRUS<\/span>. 5 coast of Pantos, 130 stadia to the north-east of IV letnoninm; it is the most projecting cape on that roan, and forms the terminating point of the chain of Mount Paryadres. It was believed to have re- wired its name from the fact that Jason had landed there. (Strab. xii. p. M8; Arrian, Peripl. p. 17; Anonym. Peripl. p. 11; Ptol. v. 6.  4; Xenoph. A nab. vi. 2.  1, who calls it'Iwrovia S  t?'j.) It still bears the name Jasoon, [...] A second town of the name of Iassus existed in <span class=\"place\" data-place-id=\"628949\" >Cappadocia<\/span> or <span class=\"place\" data-place-id=\"628936\" >Armenia<\/span> <span class=\"place\" data-place-id=\"628936\" >Minor<\/span> [...] ",
        "text@grc":"(Greek version here)",
		"image":"http:\/\/books.google.com\/books?id=-C0BAAAAQAAJ&pg=PA1&img=1&zoom=3&hl=en&sig=ACfU3U3ghy3Vlj6M8IqUKakKJjFI8-LYdg&ci=0%2C0%2C1000%2C2000&edge=0"
    }

See also:
    http://gap.alexandriaarchive.org/books/1/page/1.json

#### /places/&lt;place_id&gt;/books.json
Info about books containing references to the place:

	[
		{
    		"id":"13”,
			"tokenCount":"5”,
			"uri":"http:\/\/www.google.com\/books?id=IlUMAQAAMAAJ”,
			"title":"History of the Decline and Fall of the Roman empire for the use of families and young persons, Volume I”,
			"authors":"Edward Gibbon, Thomas Bowdler”,
			"date":"1826”,
			"created":"0000-00-00 00:00:00”,
			"updated":"2011-10-17 10:48:05”
		},   …
	]

See also:
    http://gap.alexandriaarchive.org/places/874699/books.json
