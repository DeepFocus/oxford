require.config({
	/* Base Url is libs folder for simpler references */
	baseUrl: './assets/js/lib',

	paths: {
		'app': '../app',
		'jquery': 'jquery',
		'jquery.transit': 'jquery.transit'
	},

	shim: {
		'jquery.transit': ['jquery']
	},

	waitSeconds: 15
});

/* Grab the global modernizr object and wrap it in a define call */
define('modernizr', function() {
	"use strict";
	return window.Modernizr;
});

/* Main entry point */
require(['app/oxford'], function(Oxford) {
	return Oxford.init();
});
