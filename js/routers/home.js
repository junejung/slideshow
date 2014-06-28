define([
	'jquery', 
	'backbone', 
	'underscore', 
	'models/picture',
	'views/pictureViews'], 
function($, Backbone, _, Picture, PictureViews){
	var Router = Backbone.Router.extend({
		initialize: function(){
			var pictureOneUrl = 'http://www.goodlightscraps.com/content/funny-animals/funny-animals-1.jpg';
			var pictureTwoUrl = 'http://1.bp.blogspot.com/-ymNfDysQK6I/USnwkgW65gI/AAAAAAAABhE/bTcZZ-LLlV4/s1600/Funny-Animals-funny-animals-fun-animals-bears-pics-3_large1.jpg';
			var pictureThreeUrl = 'http://2.bp.blogspot.com/-0DslMOdh9cg/USnwyysNswI/AAAAAAAABhc/1krkBsJyUGg/s640/Funny+Squirrel+Apple+Little+Animals4271.jpg';
			var pictureFourUrl = 'http://www.goodlightscraps.com/content/funny-animals/funny-animals-4.jpg'
			var pictureFiveUrl = 'http://www.goodlightscraps.com/content/funny-animals/funny-animals-7.jpg'
			var pictureSixUrl = 'http://www.goodlightscraps.com/content/funny-animals/funny-animals-9.jpg'

			var pic1 = new Picture({id: 1, url: pictureOneUrl});
			var pic2 = new Picture({id: 2, url: pictureTwoUrl});
			var pic3 = new Picture({id: 3, url: pictureThreeUrl});			
			var pic4 = new Picture({id: 4, url: pictureFourUrl});
			var pic5 = new Picture({id: 5, url: pictureFiveUrl});
			var pic6 = new Picture({id: 6, url: pictureSixUrl});

			var Pictures = Backbone.Collection.extend({});
			var pictures = new Pictures([pic1, pic2, pic3, pic4, pic5, pic6]);

			this.pictureViews = new PictureViews(pictures);

			Backbone.history.start();	
		},
		routes: {
			'': 'home'
		},
		'home': function(){
			var self = this;
			debugger;
			setInterval(function(){
				self.pictureViews.render().appendTo('body')
			}, 1000);
		}
	});
	
	return Router;
});
