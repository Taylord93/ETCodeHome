/*
====================================================================================================================================
	Initializes input value to model for inputs
====================================================================================================================================
*/
app.directive('input', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attr) {
      if (attr.ngModel && attr.value) {
        $parse(attr.ngModel).assign(scope, attr.value);
      }
    }
  };
}).directive('textarea', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attr) {
      if (attr.ngModel && attr.value) {
        $parse(attr.ngModel).assign(scope, attr.value);
      }
    }
  };
}).directive('select', function ($parse) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, element, attr) {
      if (attr.ngModel && attr.value) {
        $parse(attr.ngModel).assign(scope, attr.value);
      }
    }
  };
})

/*
====================================================================================================================================
	Templating
====================================================================================================================================
*/

app.directive('codeinject', function() {
// codeinject are the XMP tags, generating the email code
	return {
		controller: function($rootScope, $scope, $element) {
		    $scope.$watch(
		    	function () { 
		    		return $element.text();
		    		//watching for changes in element.text() 
		    	},
			    function (newValue, oldValue) {
					if (newValue !== oldValue) {
						$rootScope.$broadcast('codeChange', { element: $element, changed: $element.html() });
						//Sends "codechange" when the text content of an xmp tag is changed.
					}
			    }
		  	);
		},
		templateUrl: function(elem, attr){
			return 'partials/email-code/'+attr.type+'.html';
			//Takes element type="" attribute to determine what template to use
		}
	};
	
}).directive('newsection', function() {
// Newsection are the code-gen divs
	return {
		templateUrl: function(elem, attr){
		  return 'partials/gen-code/'+attr.type+'.html';
		  //Returns template for code generating section to 'newsection' marked divs
		}
	};
}).directive('createsection', function(create) {
	return {
		restrict: 'A',
		controller: function($rootScope, $scope, $element, $compile, mySharedService) {
		    $scope.$on('sectionCreated', function(event, args) {
		    //Listens for sectioncreated broadcast and accepts arguments (elemType or $evt.target.id)	
		    	$element.append($compile('<div type="'+args.type+'" newsection></div>')($scope));
		    	//Appends compiled elements to #sections
		    });
		}
	};
})

/*
====================================================================================================================================
	Code and Design Views
====================================================================================================================================
*/

app.directive('showdesign', function(mySharedService) {
	return {
		controller: function($rootScope, $scope, $element, $attrs, mySharedService) {
			$scope.testme = mySharedService.sections;
	        
	        $scope.rawcode = function(){
	        	
	        	var output = '';
	        	for (var i = 0; i < mySharedService.sections.length; i++) {
	        		
	        		if (i % 2 == 1) {
	        			output += mySharedService.sections[i];
	        		}else {
	        			//console.log("it was an element!");
	        		}
	        		
	        	}
	        	return output;
	        }
	        
	        console.log($scope.testme)
	        $scope.$on('codeChange', function($scope, args) {
	        	mySharedService.sections.push(args.element, args.changed);
	        	var index = mySharedService.sections.indexOf(args.element) + 1;
	        	mySharedService.sections[index] = args.changed;
	        	
	        });
	        console.log($scope.testme)
    	}
    	
	}
});







/*.directive('source', ['$sce', function($sce){
  return function(val) {
    templateUrl: function(elem, attr){
      return $sce.'partials/'+attr.type+'.html';
    }
  };
}]);

console.log($('xmp').html());
*/