define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/picture',
		'text!templates/main.html'], 

function($, Backbone, _, Picture , template){
	var PictureView = Backbone.View.extend({

		initialize: function(picture){
			this.model = picture;
			this.template = _.template( template, { model: this.model.toJSON() } );
		},

		render: function(){
			$(this.el).html(this.template);
			return $(this.el);
		}
	});
	
	return PictureView;
});
