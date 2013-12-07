/*
 * Page View
 */
define(['gv', 'views/BookView', 'util/slide'], function(gv, BookView, slide) {
    var state = gv.state;
    
    // View: PageView (page content)
    return BookView.extend({
        className: 'single-page panel',
        template: '#page-template',
        
        initialize: function() {
            var view = this,
                page = view.model;
            // listen for state changes
            view.bindState('change:pageview',   view.renderPageView, view);
            view.bindState('change:placeid',    view.renderPlaceHighlight, view);
            // set backreference
            page.view = view;

			// load page
            page.ready(function() {
                view.render();
            });
        },
		
		prepareContext: function(){
			var view = this;
			var json = view.model.toJSON();
			// XXX we modify the model here (probably we should do it somewhere else...)
			var context = {};
			context.image = json.image || false;
			context.texts = new Array;
			for (var p in json){					
				var lang = false;
				var text = false;
				if(p === 'text'){
					text = json[p];					
				}else if(m = /text\@([a-zA-Z]{2,3})/.exec(p)){
					lang = m[1];
					text = json[p];
				}
				if(text !== false){
					context.texts.push({text: text, lang: lang});
				}
			}
			view.context = context;
		},
        
        // override
        renderTemplate: function(context) {
            var view = this,
                template = _.template(view.template);
			// We override the model to translate the multitext properties
			if(typeof context === 'undefined'){
				view.prepareContext();
				context = view.context;
			}
            $(view.el).html(template(context));
        },
		
        render: function() {
            var view = this;
            view.renderTemplate();
            view.renderPageView();
            view.renderPlaceHighlight();
            return view;
        },
        
        renderPageView: function() {
            var view = this,
                pageView = state.get('pageview');
            // render
			// If alternative texts are supported
			if(view.context.texts){
				for(var ix in view.context.texts){
					var txt = view.context.texts[ix];
					var tg = (pageView == 'text-'+txt.lang);
					view.$('.text-'+txt.lang).toggle( tg );
				}
			}
            view.$('.text').toggle(pageView == 'text');
            view.$('.img').toggle(pageView == 'image');
        },
        
        renderPlaceHighlight: function() {
            var placeId = state.get('placeid');
            // render
            this.$('span.place').each(function() {
                $(this).toggleClass('hi', $(this).attr('data-place-id') == placeId);
            });
        },
        
        open: function(width, fromRight) {
            this.$el.width(width - 24); // deal with padding
            slide(this.$el, true, fromRight ? 'right' : 'left');
        },
        
        close: function(fromRight) {
            this.$el.hide();
        },
        
        // UI Event Handlers - update state
        
        events: {
            'click .place':     'uiPlaceClick'
        },
        
        uiPlaceClick: function(e) {
            var placeId = $(e.target).attr('data-place-id');
            if (placeId) {
                state.set('placeid', placeId);
            }
        }
        
    });
    
});