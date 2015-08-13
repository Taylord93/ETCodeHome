	var app = angular.module('myApp', ['ngRoute']);
	
	/*
	var taxText = $('#seatTypePage').text();
	console.log(taxText)
	function trimResults (x) {
	
		if (x === 'Infant') {
			return "176";
		}else if (x === 'Booster') {
			return "178";
		}else if (x === 'Convertible') {
			return "293";
		}else if (x === 'All-In-One') {
			return "177";
		}else {
			return "93";
		}
	
	}
	function taxurl () {
	
		var URL = "http://evenflosite-dev.evenflo.com/components/handlers/gettrimsummaries.ashx?taxonomyId=" + trimResults(taxText);
	
		return URL;
	} 
	*/
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
	
	app.controller('SeatController', ['$scope', function($scope) {
		
		$.ajax({
			url: "http://evenflosite-dev.evenflo.com/components/handlers/gettrimsummaries.ashx?taxonomyId=93",
			dataType: "json",
			success: function(data) {
			
				$scope.seats = data;
			
				}, 
			error: function(data){
			
			}
		});
		
		$scope.readout = function(text){
			
			Encoder.EncodeType = "entity";
			
			var raw = text.toString(); 
			var output = Encoder.htmlDecode(raw);
			return output;  
			
		}
		
		$scope.findType = function(x) {
			console.log("Function Called");
			
			var num = 0;
			
			while (num < x.length) {
	
				if (x[num] == 176) {
						
						return "Infant";
					}else if (x[num] == 178){
						
						return "Booster"
					}else if (x[num] == 293) {
						
						return "Convertible"
					}else if (x[num] == 177) {
						
						return "All-In-One"
					}else{
						num++;
					}
				
			}
		
		}
		$scope.$on('LastRepeaterElement', function(){
			setTimeout(function() { 
			   $('#clicker').trigger('click');
			}, 0);
		});
	}]);

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
	
	
	app.filter('filterType', [function(){
		
		return function(input, type, item){
			var seat = item;
			var inp = input;
			var seatType = type;
			var inpTax = seat.taxids;
			
			var hide = 'remove';
			var show = 'show';
			
			var num = 0;
			
			for (var i = 0; i < inpTax.length; i++) {
	
				if (seatType == inpTax[i]) {
					return show;
				}else {
					num++
					if (num == inpTax.length) {
						return hide;
					}
				}
				
			}
		}
	
	}]);
	
	
	app.directive('emitLastRepeaterElement', function() {
		return function(scope) {
			if (scope.$last){
				scope.$emit('LastRepeaterElement');
			}
		};
	});
