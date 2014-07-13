/*
 * Place references View
 */
define(['gv', 'views/BookView'], function(gv, BookView) {
    var state = gv.state;
    
    // View: RelatedPlacesView (list of related places based on collocation)
    return BookView.extend({
        className: 'place-references-view',
        
        // render and update functions
        render: function() {

            var view = this,
                book = view.model,
                placeId = state.get('placeid'),
                place;
            // if no place has been set, give up
            if (!placeId) return;
            // get the place
            place = book.places.get(placeId);
            place.ready(function() {
                view.$el.append('<h4>No. of References by Book and Chapter</h4>');
				if(book.supportsSections()){
					var sections = [];
					place.get('sparkData').forEach(function(r){
						var plinks = [];
						if(parseInt(r.count) > 0){
							r.pi.forEach(function(p){
								// in spark data, p is the page index, starting from 0. So page at index 0 is page 1
								p = parseInt(p)+1;
								var lbl = p;
								var ref = book.pageIdToRef(p);
								var pl = '<span class="reference" data-page-id="' + p + '">' + ref.page + '</span>';
								var kix = ref.section;
								if(kix == ''){
									kix = 0;
								}
								if(typeof sections[kix] === 'undefined'){
									sections[kix] = [];
								}
								sections[kix].push(pl);
							});
						}
					});	
					for(var k in sections) {
						var plinks = sections[k];
						$('<p><b>Bk. ' + k + '</b> (' + plinks.length + '), Chapters: ' + plinks.join(' ') + '</p>').appendTo( view.el );				
					};
				}else{
					var plinks = [];
					place.get('sparkData').forEach(function(r){
						var sections = [];
						if(parseInt(r.count) > 0){
							var frst=true;
							r.pi.forEach(function(p){
								// in spark data, p is the page index, starting from 0. So page at index 0 is page 1
								p = parseInt(p)+1;
								var pl = '<span class="reference" data-page-id="' + p + '">' + p + '</span>';
								frst=false;
								plinks.push(pl);
							});
							plinks.push(' | ');
						}				
					});	
 				    $('<p><b>Pages:</b> ' + plinks.join(' ') + '</p>').appendTo(view.el);					
				}
            });
            return this;
        },
        
        // UI Event Handlers - update state
        events: {
            'click span.reference': 'uiPageClick'
        },
        
        uiPageClick: function(e) {
            var pageId = $(e.target).attr('data-page-id');
            if (pageId) {
				state.set({ pageid: pageId, 
                            view: 'reading-view' });
                //gv.app.updateView(true);
            }
        }
    });
    
});