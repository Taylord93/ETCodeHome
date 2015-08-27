var app = angular.module('codegen', ['ngRoute']);

app.config(
	function($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/default.html'
	    }).when('/product-alert', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/product-alert.html'
	    }).when('/product-update', {
	        templateUrl : 'file:///Users/DTaylo02/Documents/ETCodeHome/partials/layouts/product-update.html'
	    }).otherwise({
	        redirectTo : '/'
	    });
});

app.factory('mySharedService', function($rootScope) {
    var builds = {};
    //sharedService.message = 'This is from the service';
    //$rootScope.$broadcast('');
    console.log('accessed MSS')
    return builds;
}).factory('create', function($rootScope) {
    var builds = {};
    
    builds.made = 'You made this!';
    //sharedService.message = 'This is from the service';
    //$rootScope.$broadcast('');
    console.log('accessed Create')
    return builds;
});;







