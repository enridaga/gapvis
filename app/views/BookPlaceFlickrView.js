/*
 * Place Detail Flickr View
 */
define(['gv', 'views/BookView'], function(gv, BookView) {
    var state = gv.state,
        FLICKR_URL_BASE = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=pleiades%3A*%3D[id]&format=json&jsoncallback=?';
//        FLICKR_URL_BASE = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=pleiades%3Aplace%3D[id]&format=json&jsoncallback=?';
    
    // View: BookPlaceFlickrView (Flickr photos for the place detail page)
    return BookView.extend({
        className: 'place-flickr-view panel fill',
        template: '#flickr-photos-template',
    
        initialize: function() {
            this.photoTemplate = _.template($('#flickr-photo-template').html());
        },
        
        render: function() {
            var view = this,
                book = view.model,
                placeId = state.get('placeid');
                
            // render main template
            view.$el.html(view.template);
                
            // die if no place
            if (!placeId) return;
            
			// take the pleiades uri id to point to flickr images
			var place = book.places.get(placeId);
			var placeUri = place.get('uri');
			// XXX There is a bug here. Sometimes the placeUri is undefined. It might be something not waiting for data to be received...
			if(!placeUri) return;
			
			var pUriFrgs = placeUri.split('/');
			var placeUriId = pUriFrgs[pUriFrgs.length - 1];
			
            // add loading spinner
            view.$el.addClass('loading');
             
            // get Flickr data for this place
            $.ajax({
                url: FLICKR_URL_BASE.replace('[id]', placeUriId), // was placeId
                dataType: 'jsonp',
                success: function(data) {
                    view.$el.removeClass('loading');
                    var photos = data && data.items || [];
                    // XXX hide on fail?
                    if (photos.length) {
                        view.$('span.flickr-link a')
                            .attr('href', data.link)
                            .parent().show();
                        photos.slice(0,10).forEach(function(photo) {
                            // get the thumbnail image
                            photo.src = photo.media.m.replace('_m.jpg', '_s.jpg');
                            view.$('.photos').append(view.photoTemplate(photo))
                        });
                    } else {
                        view.$('.photos').append('<p>No photos were found.</p>');
                    }
                }
            });
        }
    });
    
});