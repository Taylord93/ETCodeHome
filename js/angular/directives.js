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
}).directive('createsection', function() {
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
		templateUrl: function(){
		  return 'partials/design.html';
		  //Returns template for code generating section to 'newsection' marked divs
		}
	}
}).directive('getdesign', function(mySharedService) {
	return {
		controller: function($rootScope, $scope, $element, $attrs, $sce, mySharedService) {
	        
	        $scope.rawcode = function(){
	        	
	        	var output = '';
	        	for (var i = 0; i < mySharedService.design.length; i++) {
	        		if (i % 2 == 1) {
	        			output += mySharedService.design[i];
	        		}
	        	}
	        	
	        	return $sce.trustAsHtml(output);
	        	
	        }
	        
	        $scope.$on('codeChange', function($scope, args) {
	        	
	        	if (mySharedService.design.indexOf(args.element) == -1) {
	        		
	        		mySharedService.design.push(args.element, args.changed);
	        		var index = mySharedService.design.indexOf(args.element) + 1;
	        		mySharedService.design[index] = args.changed;
	        		
	        	}else {
	        		
	        		var index = mySharedService.design.indexOf(args.element) + 1;
	        		mySharedService.design[index] = args.changed;
	        		
	        	}
	        	
	        });
    	}
    	
	}
}).directive('showcode', function(mySharedService) {
	return {
		templateUrl: function(){
		  return 'partials/code.html';
		  //Returns template for code generating section to 'newsection' marked divs
		}
	}
}).directive('getcode', function(mySharedService) {
	return {
		controller: function($rootScope, $scope, $element, $attrs, $sce,  mySharedService) {
	        $scope.rawcode = function(){
	        	
	        	var output = '';
	        	for (var i = 0; i < mySharedService.code.length; i++) {
	        		if (i % 2 == 1) {
	        			output += mySharedService.code[i];
	        		}
	        	}
	        	return $sce.trustAsHtml(output);
	        }
	        $scope.$on('codeChange', function($scope, args) {
	        	if (mySharedService.code.indexOf(args.element) == -1) {
	        		
	        		mySharedService.code.push(args.element, args.changed);
	        		var index = mySharedService.code.indexOf(args.element) + 1;
	        		mySharedService.code[index] = args.changed;
	        		
	        	}else {
	        		
	        		var index = mySharedService.code.indexOf(args.element) + 1;
	        		mySharedService.code[index] = args.changed;
	        		
	        	}
	        	
	        });
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