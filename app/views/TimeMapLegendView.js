/*
 * Frequency Legend View
 */
define(['gv', ], function(gv) {
    
    // View: Frequency Legend
    return gv.View.extend({
        className: 'timemap-legend-view',
        template: '#timemap-legend-template',
        render: function() {
			var state = gv.state,
				mode = state.get('placeTheme'),
				view = this;

            // render template
            view.$el.html(view.template);
			view.$('.timemap-legend-by-frequency,.timemap-legend-by-feature').hide();
			if(mode == 'feature'){
				return this.renderLegendByFeature();
			} else { // mode = 'frequency' || default
	            return this.renderLegendByFrequency();
			}
        },
        renderLegendByFrequency: function(){
            var view = this;
			view.$('.timemap-legend-by-frequency').show();
            // make legend
            gv.settings.colorThemes.forEach(function(theme) {
                var img = theme.eventIcon;
                view.$('.images').append('<img src="' + img + '">');
            });
        },
        renderLegendByFeature: function(){
            var view = this;
			view.$('.timemap-legend-by-feature').show();
            // make legend
            for(var ix in gv.settings.placeTypes){
				var ptype = ix,
				    pcolor = gv.settings.placeTypes[ix],
				    theme = TimeMapTheme.createCircleTheme({ color: pcolor }),
                    img = theme.eventIcon;
				var lbl = function capitaliseFirstLetter(string){
						string = string.replace('_',' ').toLowerCase();
					    return string.charAt(0).toUpperCase() + string.slice(1);
					}
                view.$('.place-types').append(lbl(ix) + '<img src="' + img + '">');
            }
        }
    });
    
});