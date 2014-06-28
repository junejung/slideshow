// This is the main entry point for the App
define(['routers/home', 'models/picture', 'views/pictureViews'], function(router, Picture, PicturesView){
	var init = function(){	
		this.router = new router({});
	};
	
	return { init: init};
});
