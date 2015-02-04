define([
	'jquery',
	'app/toggle-expand'
	], function($, toggleExpand) {

	var bodyId = document.body.id;

	toggleExpand.init();

	var exports = {
		init: function() {

			return this;
		}
	};

	return exports;
});
