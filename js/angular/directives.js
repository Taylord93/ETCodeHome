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
		controller: function($rootScope, $scope, $element, buildService) {
		    
		    $scope.$on('layoutChange', function(event) {
		    	buildService.comb = {};
		    });
		    
		    var objKey = $element.parent().parent().attr("id");
		    buildService.comb[objKey] = $element.html();
		    
		    $scope.$watch(
		    	function () { 
		    		return $element.text();
		    		//watching for changes in element.text() 
		    	},
			    function (newValue, oldValue) {
					if (newValue !== oldValue) {
					
						buildService.comb[objKey] = $element.html();
						
						$rootScope.$broadcast('codeChange', { useKey : objKey });
						//Sends "codechange" when the text content of an xmp tag is changed.
					}
			    }
		  	);
		  	
		  	
/*
====================================================================================================================================
	/ /\ \/ / /\/\ \ \ / /\ \/ / /\/\ \ \ / /    LOOOOOOOOKKKKKKK    / /\ \/ / /\/\ \ \ / /\ \/ / /\/\ \ \ / /
====================================================================================================================================
*/

//		  	$scope.$watch(
//		  		function () { 
//		  			return $element.attr('type');
//		  			//watching for changes in element.text() 
//		  		},
//		  	    function (newValue, oldValue) {
//		  			if (newValue !== oldValue) {
//		  				$element.parent().append($element.clone());
//		  				$element.remove();
//		  				//Sends "codechange" when the text content of an xmp tag is changed.
//		  			}
//		  	    }
//		  	);
		},
		templateUrl: function(elem, attr){
			return 'partials/email-code/'+attr.type+'.html';
			//Takes element type="" attribute to determine what template to use
		}
	};
	
}).directive('newsection', function() {
	// Newsection sections are the code-gen divs (layouts, not "create new section")
	return {
		controller: function($rootScope, $scope, $element, $compile, $attrs, buildService) {
		
			$('.build-section').attr('id', function(i) {
			   return 'section'+(i+1);
			});
			//Assign Unique ID to section
			
		},
		templateUrl: function(elem, attr){
		  return 'partials/gen-code/'+attr.type+'.html';
		  //Returns template for code generating section to 'newsection' marked divs
		}
	};
}).directive('createsection', function() {
	//This is for sections created outside of the layout
	return {
		restrict: 'A',
		controller: function($rootScope, $scope, $element, $compile, buildService) {
		
			var objKey = $element.parent().parent().attr("id");
			buildService.comb[objKey] = $element.html();
			
		    $scope.$on('sectionCreated', function(event, args) {
		    //Listens for sectioncreated broadcast and accepts arguments (elemType or $evt.target.id)	
		    	$element.append($compile('<div type="'+args.type+'" newsection></div>')($scope));
		    	//Appends compiled elements to #sections
		    	buildService.comb[objKey] = $element.html();
		    });
		}
	};
})

/*
====================================================================================================================================
	Code and Design Views
====================================================================================================================================
*/

app.directive('showprog', function(buildService) {
	return {
		templateUrl: function(elem, attr){
		  return 'partials/'+attr.type+'.html';
		  //Returns template for code generating section to 'newsection' marked divs
		}
	}
}).directive('getprog', function(buildService) {
	return {
	
		controller: function($rootScope, $scope, $element, $attrs, $sce, buildService) {
			
			$scope.prog = buildService.comb;
	        
    	}
    	
	}
});


app.directive('changer', function() {
	return {
		controller: function($rootScope, $scope, $element, $attrs, $sce) {
		    
		    
		}
	}
})





/*
$('#pages li').attr('id', function(i) {
   return 'page'+(i+1);
});

Create unique ID on elements

*/