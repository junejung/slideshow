define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
	var Picture = Backbone.Model.extend({
		default : {
			id : null,
			url: null,
		},
		initialize : function(){
		}
	});
	
	return Picture;
});
