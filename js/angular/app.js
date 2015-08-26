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






	
/*

	app.controller('MyController', function($scope) {
	  $scope.person = { name: "Devon" };
	  var updateClock = function() {
	    $scope.clock = new Date();
	  };
	  var timer = setInterval(function() {
	    $scope.$apply(updateClock);
	  }, 10);
	  updateClock();
	});
	
	
	app.filter('rawHtml', ['$sce', function($sce){
	  return function(val) {
	    return $sce.trustAsHtml(val);
	  };
	}]);
	
	
	app.directive('emitLastRepeaterElement', function() {
		return function(scope) {
			if (scope.$last){
				scope.$emit('LastRepeaterElement');
			}
		};
	});
	
	
	
*/







