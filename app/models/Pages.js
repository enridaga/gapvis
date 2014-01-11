/*
 * Page model
 */
define(['gv', 'models/Model', 'models/Collection'], function(gv, Model, Collection) {
    var settings = gv.settings,
        Page;
       
    // Model: Page
    Page = Model.extend({
        type: 'page',
        
        defaults: {
            places: []
        }, 
        
        initialize: function() {
            this.set({
                title:'Page ' + this.id
            });
        },
        
        isFullyLoaded: function() {
            return !!this.get('text'); // FIXME this may not exists if multilang book
        }
    });
    
    // Collection: PageList
    return Collection.extend({
        model: Page,
        url: function() {
            return settings.API_ROOT +  '/books/' + this.book.id + '/page';
        }
    });
    
});