(function (angular) {
	'use strict'; // 严格模式

	// Your starting point. Enjoy the ride!
	var todoMvc = angular.module("todoMvcApp", ['ngRoute']);
	

	todoMvc.config(['$routeProvider', function($routeProvider) {
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
