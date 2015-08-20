var app = angular.module('codegen', ['ngRoute']);

/*
app.config(
	function($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl : 'file://localhost/Users/DTaylo02/Documents/ETCodeGen/'
	    }).when('/what', {
	        templateUrl : 'file://localhost/Users/DTaylo02/Documents/ETCodeGen/partials/blockwrap.html'
	    }).otherwise({
	        redirectTo : '/'
	    });
});
*/
app.controller('globalController', ['$scope', function($scope) {

	$scope.breakImg = function(){
		
		if ($('#disableImg').parent().hasClass('imgbroke')) {
			$('#disableImg').parent().removeClass('imgbroke');
			$('#disableImg').text("Break Images");
			$scope.break = '';
		}else {
			$('#disableImg').parent().addClass('imgbroke');
			$('#disableImg').text("Fix Images");
			$scope.break = ' Oops! I broke your image! ';
		}
	
	}
	
}]).controller('bannerController', ['$scope', function($scope) {
		
}]).controller('ctaController', ['$scope', function($scope) {
		
}]).controller('feaController', ['$scope', function($scope) {
		
}]).controller('tcsController', ['$scope', function($scope) {
		
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
}).directive('textarea', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attrs) {
      if (attrs.ngModel && attrs.value) {
        $parse(attrs.ngModel).assign(scope, attrs.value);
      }
    }
  };
}).directive('select', function ($parse) {
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







