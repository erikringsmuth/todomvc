/*global define*/
define([], function () {
	'use strict';

	// Require.js configuration
	return {
		baseUrl: '..', // main.js is in `/js` but we want the baseUrl to be `/`
		paths: {
			'text': 'bower_components/requirejs-text/text',
			'router': 'bower_components/requirejs-router/router',
			'nex': 'bower_components/nex-js/nex',
			'handlebars': 'bower_components/handlebars/handlebars'
		},
		shim: {
			'handlebars': {
				exports: 'Handlebars'
			}
		}
	};
});
