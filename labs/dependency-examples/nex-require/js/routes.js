/*global define*/
define([
	'router'
], function (router) {
	'use strict';

	// Define all of your routes here
	return {
		// The todoAll route should match '/' and '/all'
		todoAll: {matchesUrl: function () { return router.testRoute({ path: '/' }) || router.testRoute({ path: '/all' }); }, module: 'js/todo/todoView'},
		todoActive: {path: '/active', module: 'js/todo/todoView'},
		todoCompleted: {path: '/completed', module: 'js/todo/todoView'}
	};
});
