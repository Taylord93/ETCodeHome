var app = angular.module('codegen', ['ngRoute']);

app.config(
	function($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl : 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/layouts/default.html'
	    }).when('/product-alert', {
	        templateUrl : 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/layouts/product-alert.html'
	    }).when('/product-update', {
	        templateUrl : 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/layouts/product-update.html'
	    }).otherwise({
	        redirectTo : '/'
	    });
});

app.factory('mySharedService', function($rootScope) {
    var builds = {};
    builds.design = [];
    builds.code = [];
    return builds;
});







