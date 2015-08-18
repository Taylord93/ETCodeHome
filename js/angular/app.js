var app = angular.module('codegen', []);

app.controller('bannerController', ['$scope', function($scope) {
		
}]);	
app.controller('ctaController', ['$scope', function($scope) {
		
}]);
app.controller('feaController', ['$scope', function($scope) {
		
}]);
app.controller('tcsController', ['$scope', function($scope) {
		
}]);	


app.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);
app.directive('input', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attrs) {
      if (attrs.ngModel && attrs.value) {
        $parse(attrs.ngModel).assign(scope, attrs.value);
      }
    }
  };
});
app.directive('textarea', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attrs) {
      if (attrs.ngModel && attrs.value) {
        $parse(attrs.ngModel).assign(scope, attrs.value);
      }
    }
  };
});
app.directive('select', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attrs) {
      if (attrs.ngModel && attrs.value) {
        $parse(attrs.ngModel).assign(scope, attrs.value);
      }
    }
  };
});
	/*
	app.config(
		function($routeProvider) {
		    $routeProvider.when('/', {
		        templateUrl : 'http://miatestws4/safetymadeeasier/assets/carseats/partials/all.html'
		    }).when('/infant', {
		        templateUrl : 'http://miatestws4/safetymadeeasier/assets/carseats/partials/infant.html'
		    }).when('/booster', {
		        templateUrl : 'http://miatestws4/safetymadeeasier/assets/carseats/partials/booster.html'
		    }).when('/convertible', {
		        templateUrl : 'http://miatestws4/safetymadeeasier/assets/carseats/partials/convertible.html'
		    }).when('/all-in-one', {
		        templateUrl : 'http://miatestws4/safetymadeeasier/assets/carseats/partials/all-in-one.html'
		    }).otherwise({
		        redirectTo : '/'
		    });
		    //$locationProvider.html5Mode(true);
		    //$locationProvider.hashPrefix('!');
	});
	


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







