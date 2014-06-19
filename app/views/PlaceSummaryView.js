/*
 * TimeMap View
 */
define(['gv', 'views/BookView', 'views/PlaceFrequencyBarsView', 'views/PlaceReferencesView'], 
    function(gv, BookView, PlaceFrequencyBarsView, PlaceReferencesView) {
    
    var state = gv.state,
		settings = gv.settings;
    
    // View: PlaceSummaryView
    return BookView.extend({
        className: 'place-summary-view loading',
        template: '#place-summary-template',
        
        clear: function() {
            this.freqBars && this.freqBars.clear();
            BookView.prototype.clear.call(this);
        },
        
        // render and update functions
        
        render: function() {
            var view = this,
                book = view.model,
                placeId = state.get('placeid'),
                place;
            // if no map or place has been set, give up
            if (!placeId) {
                return;
            }
            // get the place
            place = book.places.get(placeId);
            place.ready(function() {
                view.$el.removeClass('loading');
                // create content
                view.renderTemplate(place.toJSON());
                // add frequency bars
                var freqBars = view.freqBars = new PlaceFrequencyBarsView({
                    model: book,
                    place: place,
                    el: view.$('div.frequency-bars')[0]
                });
				// add place references
				var placeRefs = view.placeRefs = new PlaceReferencesView({
					model: book,
					place: place,
					el: view.$('div.place-references')[0]
				});
                // render sub-elements
                freqBars.render();
				placeRefs.render();
                view.renderBarHighlight();
            });
			
			// Hide report a problem if link null
			if(settings.REPORT_PROBLEM_PLACE_URL === false){
				this.$el.find('.change-this, .change-this-divider').hide();
			}
            return this;
        },
		
		uiReportAProblem: function(){
			if(settings.REPORT_PROBLEM_PLACE_URL){
				var placeId = state.get('placeid')
				var link = settings.REPORT_PROBLEM_PLACE_URL.replace('{place-id}', placeId);
				window.open(link);
			}
		},
        events: {
            'click .change-this':     'uiReportAProblem'
        },
        
        renderBarHighlight: function() {
            this.freqBars.updateHighlight();
        }
    });
    
});