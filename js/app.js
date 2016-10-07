(function (angular) {
	'use strict';

	var app = angular.module('app', ['ngRoute']);
		app.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'tmpls/tmpl.html',
				controller: 'todoController'
			}).when('/active', {
				templateUrl: 'tmpls/tmpl.html',
				controller: 'todoController'
			}).when('/completed', {
				templateUrl: 'tmpls/tmpl.html',
				controller: 'todoController'
			}).otherwise({
				redirectTo: '/'
			});
	}]);
})(angular);
