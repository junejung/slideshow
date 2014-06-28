define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/picture',
		'views/pictureView'], 
function($, Backbone, _, Picture , PictureView ){
	var PictureViews = Backbone.View.extend({

		initialize: function(pictures){
			this.collection = pictures;
			this.pictureViews = this.collection.map(function(pic){ return new PictureView(pic) });
		},

		render: function(){
			var randomPicture = this.randomPic()
			$(this.el).html(randomPicture.render());
			return $(this.el);
		},

		randomPic: function(){
			var numberOfviews = this.pictureViews.length
			return this.pictureViews[Math.floor(Math.random() * numberOfviews)];
		}

	});
	
	return PictureViews;
});
