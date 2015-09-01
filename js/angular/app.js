var app = angular.module('codegen', ['ngRoute']);

app.config(
	function($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl : '/partials/layouts/default.html'
	    }).when('/product-alert', {
	        templateUrl : '/partials/layouts/product-alert.html'
	    }).when('/product-update', {
	        templateUrl : '/partials/layouts/product-update.html'
	    }).when('/blank', {
	        templateUrl : '/partials/layouts/blank.html'
	    }).otherwise({
	        redirectTo : '/'
	    });
}).factory('mySharedService', function($rootScope) {
    var builds = {};
    builds.design = [];
    builds.code = [];
    return builds;
});
