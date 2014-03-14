/*
 * Book View
 */
define(['gv'], function(gv) {

    // View: BookView (parent class for book views)
    return gv.View.extend({
        // utility - render an underscore template to this el's html
        renderTemplate: function(context) {
            var view = this,
                book = view.model,
                template = _.template(view.template);
            context = context || view.model.toJSON();
			
			if (!gv.settings.VIEW_ON){
				context.viewon = 'Google Books';
			}else{
				context.viewon = gv.settings.VIEW_ON;
			}
			context.viewonlink = context.uri;
			
			if(typeof gv.settings.viewOnLink == 'function'){
				// Current view?
				if( gv.state.get('view') == 'reading-view' ){
					var page = gv.state.get('pageid');
					if(book.supportsSections()){
						page = book.pageIdToRef(page).label; // We set like 1.2
					}
					context.viewonlink = gv.settings.viewOnLink(context.uri, page);					
				}
			}
            $(view.el).html(template(context));
        },
        
        ready: function(callback) {
            var view = this,
                state = gv.state,
                bookId = state.get('bookid'),
                book = view.model;
            if (!book || book.id != bookId || !book.isFullyLoaded()) {
                book = view.model = gv.books.getOrCreate(bookId);
                book.ready(function() {
                    // set the page id if not set
                    if (!state.get('pageid')) {
                        state.set({ pageid: book.firstId() });
                    }
                    callback();
                });
            } else {
                callback();
            }
        }
        
    });
    
});