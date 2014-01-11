/*
 * Page Control View
 */
define(['gv', 'views/BookView'], function(gv, BookView) {
    var state = gv.state;
    
    // View: PageControlView (control buttons)
    return BookView.extend({
        className: 'page-control-view',
        template: '#page-control-template',
        
        initialize: function(opts) {
            var view = this;
            // listen for state changes
            view.bindState('change:pageid', view.renderNextPrev, view);
            view.bindState('change:pageview', view.renderPageView, view);
        },
		
        render: function() {
            var view = this;
            // fill in template
            view.renderTemplate();
            view.renderNextPrev();
            view.renderPageView();
        },
        
        renderNextPrev: function() {
            // update next/prev
            var view = this,
                book = view.model,
                pageId = state.get('pageid') || book.firstId(),
                prev = view.prev = book.prevId(pageId),
                next = view.next = book.nextId(pageId),
				ref  = book.pageIdToRef(pageId);
;
						
            // render
            view.$('.prev').toggleClass('on', !!prev);
            view.$('.next').toggleClass('on', !!next);
			if(typeof ref !== 'undefined'){
				view.$('.page-id').val(ref.label);
			}else{
				view.$('.page-id').val(pageId);
			}
        },
        
        renderPageView: function() {
			
            var view = this,
                pageView = state.get('pageview');
			// render
			view.$('.showtext').toggleClass('on', pageView != 'text');
			// If there is support for multiple texts
			if(typeof view.model.attributes.texts != 'undefined'){
				for(var ix in view.model.attributes.texts){
					var txt = view.model.attributes.texts[ix];
					view.registerAltTextClick(txt);
					view.$('.showtext-' + txt.lang).toggleClass('on', pageView != 'text-' + txt.lang);	
				}
			}
			view.$('.showimg').toggleClass('on', pageView != 'image');
        },
		
		registerAltTextClick: function(txt){
            var view = this;
			var stateValue = 'text-' + txt.lang;
			view.$('.showtext-' + txt.lang).click('on', function() {
            		state.set({ pageview: stateValue })
        		});				
		},
        
        // UI Event Handlers - update state
        events: {
            'click .next.on':       'uiNext',
            'click .prev.on':       'uiPrev',
            'click .showimg.on':    'uiShowImage',
            'click .showtext.on':   'uiShowText',
            'change .page-id':      'uiJumpToPage'
        },
        
        uiNext: function() {
            state.set({ pageid: this.next });
        },
        
        uiPrev: function() {
            state.set({ pageid: this.prev });
        },
        
        uiShowImage: function() {
            state.set({ pageview: 'image' })
        },
        
        uiShowText: function() {
            state.set({ pageview: 'text' })
        },
        
        uiJumpToPage: function(e) {
			var view = this,
				book = view.model,
				oldPageId = state.get('pageid'),
            	pageId = $(e.target).val(),
				showPageId = pageId;
			// if pageId is a ref we need to rebuild the pageId
			if( pageId.indexOf('.') !== -1 && (typeof book.attributes.sections !== 'undefined')){
				// discover pageId
				pageId = book.refToPageId(pageId, book);
			}
            if (pageId && this.model.pages.get(pageId)) {
                // valid pageId
                state.set({ scrolljump: true });
                state.set({ pageid: pageId });
            } else {
                // not valid
                this.renderNextPrev();
                state.set({ 
                    message: {
                        text: "Sorry, there isn't a page '" + showPageId + "' in this book.",
                        type: "error"
                    }
                });
            }
        }
    });
    
});