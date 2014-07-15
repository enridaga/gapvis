/*
 * Book Title View
 */
define(['gv', 'views/BookView'], function(gv, BookView) {
    var state = gv.state,
		settings = gv.settings;
    
    // View: BookTitleView (title and metadata)
    return BookView.extend({
        template: '#' + settings.BOOK_TITLE_TEMPLATE,
        initialize: function(){
            var view = this;
            view.bindState('change:pageid', view.render, view);
        },
        render: function() {
			var view = this;
			
			var context = view.model.toJSON();
			if( state.get('view') == 'reading-view' ){	
				context.intro = gv.settings.READING_VIEW_INTRO;					
			}else if( state.get('view') == 'place-view' ){	
				context.intro = gv.settings.PLACE_VIEW_INTRO;					
			} else context.intro = '';
            view.renderTemplate(context);
            view.$('h2.book-title')
                .toggleClass('on', state.get('view') != 'book-summary');
            return view;
        },
        
        // UI event handlers
        
        events: {
            "click h2.book-title":      "uiGoToSummary"
        },
        
        uiGoToSummary: function() {
            state.set({ 'view': 'book-summary' });
        }
    });
    
});