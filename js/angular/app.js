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
})



/**********************************************************************************************************************************\
====================================================================================================================================
====================================================================================================================================

	@SERVICES
	
====================================================================================================================================
====================================================================================================================================
\**********************************************************************************************************************************/



app.factory('buildService', function($rootScope) {
    var builds = {};
    builds.design = [];
    builds.code = [];
    builds.comb = {};
    builds.passme = false;
    builds.passargs = '';
    return builds;
});



/**********************************************************************************************************************************\
====================================================================================================================================
====================================================================================================================================

	@CONTROLLERS
	
====================================================================================================================================
====================================================================================================================================
\**********************************************************************************************************************************/



app.controller('globalController', function($rootScope, $scope) {
	
	$scope.breakImg = function(evt){
		
		var $elem = $(evt.target).parent();
		var $targ = $(evt.target);
		
		if ($elem.hasClass('imgbroke')) {
			$elem.removeClass('imgbroke');
			$targ.text("Break Images").removeClass('chbg red alert');
			$scope.break = '';
		}else {
			$elem.addClass('imgbroke');
			$targ.text("Fix Images").addClass('chbg red alert');
			$scope.break = ' Oops! I broke your image! ';
		}
	
	}
	
	$scope.section = function(x){
		
		var splitter = x.split(" ");
		
		var somearray = [];
		
		for (var i = 0; i < splitter.length; i++) {
			somearray.push('partials/gen-code/'+splitter[i]+'.html');
		}
		
		return somearray;
		
	}
	
	$scope.newSection = function(evt, el, attr){
		
		if ($(evt.target).hasClass('item')) {
			var elemType = $(evt.target).attr('id');
		}else {
			var elemType = $(evt.target).parent().attr('id');
		}
		
		$rootScope.$broadcast('sectionCreated', { type : elemType });
		//$rootScope.$broadcast('objectCreated');
		
	}
	
	$scope.changeBackground = function(evt, color){
		$(evt.target.parentNode.parentNode).addClass('chbg '+color);
	}
	
	$scope.changeBack = function(evt){
		$(evt.target.parentNode.parentNode).removeClass('chbg');
	}
	
	$scope.inputFocus = function(evt){
		
		$elem = $(evt.target);
		
		if ($elem.hasClass("dirty") == false) {
			$elem.attr('placeholder', $elem.val()).val("");
			$elem.addClass("dirty");
		}
		
	}
	
	$scope.inputOffFocus = function(evt){
		
		$elem = $(evt.target);
		if ($elem.val() == "" || $elem.val() == null || $elem.val() == " ") {
			$elem.val($elem.attr('placeholder'));
			$elem.removeClass("dirty");
		}
		
	}
	
	$scope.emptyness = '';
	
	$scope.deleteSection = function(evt){
		
		var $section = $(evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
		var $subsection = $(evt.target.parentNode.parentNode.parentNode.parentNode.parentNode).attr('id');
		
		swal({   
			title: "Are you sure?",   
			text: "Your changes will be lost",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "rgb(150, 50, 50)",   
			confirmButtonText: "CONFIRM",   
			cancelButtonText: "CANCEL",   
			closeOnConfirm: false,   
			closeOnCancel: true
		}, function(isConfirm){   
			if (isConfirm) {     
				swal({   
					title: "Section Deleted",
					type: "success",  
					timer: 1000,   
					showConfirmButton: false 
				}); 
				
				$rootScope.$broadcast('objectDeleted', { objKey:$subsection });
				
				$section.remove();
				
			}
		});
		
	}
	
	$scope.slide = function(evt){
		
		var $elem = $(evt.target.nextSibling.nextSibling);
		var $targ = $(evt.target);
		
		if ($elem.hasClass('collapsed')) {
			$elem.removeClass('collapsed').slideDown();
		}else {
			$elem.addClass('collapsed').slideUp();
		}
		$rootScope.$broadcast('slidup');
		
	}
	
	$scope.collapseAll = function(){
	
		$('.build').addClass('collapsed').slideUp();
	
	}
	
	$scope.expandAll = function(){
	
		$('.build').removeClass('collapsed').slideDown();
	
	}
	
	$scope.changeLayout = function(evt){
		
		var $elem = $(evt.target).parent();
		var $targ = $(evt.target);
		
		if ($elem.hasClass('active') == false) {
			$elem.parent().find($('.active')).removeClass('active');
			$elem.addClass('active');
		}
		$rootScope.$broadcast('layoutChange');
	}
	
	$scope.showCodeView = function(evt){
		
		var $elem = $(evt.target).parent();
		
		if ($elem.hasClass('active') == false) {
			$elem.parent().find($('.active')).removeClass('active');
			$elem.addClass('active');
			$('#viewer').css('display', 'none');
			$('#sourceViewer').fadeIn();
		}
		
	}
	
	$scope.showDesignView = function(evt){
		
		var $elem = $(evt.target).parent();
		
		if ($elem.hasClass('active') == false) {
			$elem.parent().find($('.active')).removeClass('active');
			$elem.addClass('active');
			$('#sourceViewer').css('display', 'none');
			$('#viewer').fadeIn();
		}
		
	}
	
	$scope.viewSource = function (evt){
		
		var $elem = $(evt.target);
		
		if ($elem.hasClass('code-visible')) {
			$elem.removeClass('code-visible').text('View Source');
			$elem.parent().next().slideUp();
		}else {
			$elem.addClass('code-visible').text('Hide Source');
			$elem.parent().next().slideDown();
		}
		
	}
	
}).controller('bannerController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
}]).controller('ctaController', ['$scope', '$rootScope', function($rootScope, $scope, $compile) {
	
	$scope.changebuttons = function(evt){
	
		$elem = $(evt.target);
		$elemtarg = $elem.parent().find($('xmp'));
		
		if ($elem.hasClass('two-buttons')) {
			$elem.removeClass('two-buttons');
			$elem.parent().find($('xmp')).remove();
			$elem.parent().append($compile('<xmp class="large-12 columns html" type="cta" codeinject watchme contenteditable></xmp>')($scope))
		}else {
			$elem.addClass('two-buttons');
			$elem.parent().find($('xmp')).remove();
			$elem.parent().append($compile('<xmp class="large-12 columns html" type="cta" codeinject watchme contenteditable></xmp>')($scope))
		}
	
	}
		
}]).controller('feaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('tcsController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
}]).controller('codeController', ['$scope', '$rootScope', '$sce', 'buildService', function($rootScope, $scope, buildService) {
	
}]);




/**********************************************************************************************************************************\
====================================================================================================================================
====================================================================================================================================

	@DIRECTIVES
	
====================================================================================================================================
====================================================================================================================================
\**********************************************************************************************************************************/



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

//======================================= TEMPLATING =======================================

app.directive('codeinject', function() {
// codeinject are the XMP tags, generating the email code
	return {
		controller: function($rootScope, $scope, $element, buildService) {
		    
		    $scope.$on('objectDeleted', function(event, args) {
		    
		    	delete buildService.comb[args.objKey];
		    	$rootScope.$broadcast('codeChange');
		    	
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
						
						$rootScope.$broadcast('codeChange');
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
//		  		},
//		  	    function (newValue, oldValue) {
//		  			if (newValue !== oldValue) {
//		  				$element.parent().append($element.clone());
//		  				$element.remove();
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
			}).addClass('no-id');
			
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

//======================================= CODE / DESIGN VIEWS =======================================

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
			
			$scope.$on('codeChange', function(event, args) {
				
				var keeps = [];
				var deletes = [];
				
				for (var i = 0; i < $('.build-section').length; i++) {
					
					keeps.push($('.build-section:eq('+i+')').attr('id'));
					
				}
				// LLLLLLOOOOOOOOOOKKKKKKKK
				for (var i = 0; i < keeps.length; i++) {
					if (buildService.comb.hasOwnProperty('section'+i)) {
//						console.log("yep");
//						console.log(buildService.comb['section'+i]);
					}else {
						delete buildService.comb[i];
					}
				}
				
				$scope.prog = buildService.comb;
				
			});
			
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



/**********************************************************************************************************************************\
====================================================================================================================================
====================================================================================================================================

	@FILTERS
	
====================================================================================================================================
====================================================================================================================================
\**********************************************************************************************************************************/



app.filter('rawHtml', ['$sce', function($sce){
	return function(val) {
		return $sce.trustAsHtml(val);
	};
}]).filter('sanitizer', ['$sce', function($sce){
	return function(val) {
		
		var escArr = [];
		
		var splitText = val.split('');
		
		for (var i = 0; i < splitText.length; i++) {
		
			escArr.push(splitText[i].replace(/\</g, '&lt;').replace(/\>/g,'&gt;').replace(/\©/g,'&copy;').replace(/\®/g,'&reg;').replace(/\™/g,'&trade;').replace(/\ /g,'&nbsp;'));
		
		}
		
		var joinedup = escArr.join("");
		return joinedup;
		
	};
}])

