var app = angular.module('codegen', ['ngRoute']);

app.config(
	function($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/default.html'
	    }).when('/product-alert', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/product-alert.html'
	    }).when('/product-update', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/product-update.html'
	    }).when('/blank', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/blank.html'
	    }).otherwise({
	        redirectTo : '/'
	    });
}).factory('buildService', function($rootScope) {
    var builds = {};
    builds.design = [];
    builds.code = [];
    builds.comb = {};
    builds.passme = false;
    builds.passargs = '';
    return builds;
});
