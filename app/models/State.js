/*
 * State model
 */
define(['gv'], function(gv) {
    
    // model to hold current state
    gv.State = gv.State.extend({
    
        initialize: function() {
            var state = this;
            // listen for state changes
            state.on('change:bookid', function() {
                state.clearBookState(true);
            });
			// listen changes of pageview
			// state.on('change:pageview', function(st){
// 				if(DEBUG) console.log('changed pageview:', st.get('pageview'));
// 			});
			
			state.set('placeTheme', gv.settings.PLACE_THEME);
        },
    
        defaults: {
            //pageview: 'text', // this may not be true
            barsort: 'ref',
			placeTheme: 'feature', // can be 'feature' or 'frequency'
        },
        
        // clear all data relating to the current book
        clearBookState: function(silent) {
            var s = this,
                opts = silent ? {silent:true} : {};
            _(_.keys(s.attributes))
                .without('view','bookid','pageview','barsort','pagehastext','pagehasimage','placeTheme')
                .forEach(function(k) {
                    s.unset(k, opts)
                });
        }
    });
    
    // reset to use new class
    gv.resetState();
    
});