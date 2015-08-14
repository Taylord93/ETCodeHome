var app = angular.module('codegen', []);

app.controller('bannerController', ['$scope', function($scope) {
		//$scope.src = $('input#bannerpath').change().val();
		//$scope.alt = $('input#bannertitle').change().val();
		//$scope.href = $('input#bannerlink').change().val();
		$scope.code = '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" valign="middle"><a href="'+ $scope.href +'" border="0" target="_blank"><img class="fullwidth" border="0" src="'+$scope.src+'" alt="'+$scope.alt+'"/></a></td></tr></tbody></table>';
		//$scope.src = 'bob';
		
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







