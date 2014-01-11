/*
 * Change This Link View
 */
define(['gv', 'views/ChangeFormView'], function(gv, ChangeFormView) {
    var state = gv.state,
        timer;
	var settings = gv.settings;
    
    // View: ChangeLinkView (hovering change this link)
    return gv.View.extend({
        el: '#change-this-link',
        
        // this is called by parent view (PagesView)
        open: function(top, left, width, height) {
            // position the link
            $(this.el)
                .css({
                    top: top - 15,
                    left: left + width + 5
                })
                .show();
        },
        
        close: function() {
            $(this.el).hide();
        },
        
        clear: function() {
            var view = this;
            if (view.form) view.form.clear();
            view.close();
            view.undelegateEvents();
        },
        
        // lazy instantiation of form view
        openForm: function(token) {
            var view = this;
            if (!view.form) {
                view.form = new ChangeFormView({ 
                    model: view.model,
                    token: view.token,
                    placeId: view.placeId
                });
            }
            view.form.open();
        },
        
        // UI Event Handlers
        
        events: {
            'mouseover':    'uiMouseOver',
            'mouseleave':   'close',
            'click button': 'uiButtonClick'
        },
        
        uiMouseOver: function() {
            this.clearTimer();
        },
        
        uiButtonClick: function(e) {
			var view = this;
			// if(DEBUG) console.log("cliecked", e);
			// if(DEBUG) console.log("view", view);
			// if(DEBUG) console.log("set", settings.REPORT_BAD_TOKEN_URL);
			if(settings.REPORT_BAD_TOKEN_URL){
				this.directLink();
			}else{
	            this.openForm($(e.target).text());				
			}
            this.close();
        },
		
		directLink: function(){
			var link = settings.REPORT_BAD_TOKEN_URL.replace('{token-id}', this.tokenId);
//			if(DEBUG) console.log("report bad token link", link);
			window.open(link);
		},
        
        // timer control for hiding the edit link
        
        startTimer: function() {
            var view = this;
            view.clearTimer();
            timer = setTimeout(function() {
                view.close();
                timer = null;
            }, 1000);
        },
        
        clearTimer: function() {
            if (timer) {
                window.clearTimeout(timer);
                timer = null;
            }
        }
     
    });
    
});