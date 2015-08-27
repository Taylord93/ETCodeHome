app.controller('globalController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
	$rootScope.allTags = 'My Var';
	console.log($rootScope.myVar);
	console.log($rootScope.allTags);
	
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
	
	$scope.section = function(x){
		
		var splitter = x.split(" ");
		
		var somearray = [];
		
		for (var i = 0; i < splitter.length; i++) {
			
			somearray.push('partials/gen-code/'+splitter[i]+'.html');
			
		}
		
		return somearray;
		
	}
	
	$scope.newSection = function(evt, elem, attr){
		
		var $elasd = '<div type="cta" newsection></div>'
		$rootScope.$compile($elasd)($scope);
		$('#newsections').append($elasd);
		
	}
	
	$scope.changeBackground = function(evt){
		$(evt.target.parentNode.parentNode).addClass('chbg red');
	}
	
	$scope.changeBack = function(evt){
		$(evt.target.parentNode.parentNode).removeClass('chbg');
	}
	
	$scope.deleteSection = function(evt){
		
		var $section = $(evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
		
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
				
				$section.remove();
			}
		});
		
	}
	
	$scope.slide = function(evt){
		
		var $elem = $(evt.target.nextSibling.nextSibling);
		var $targ = $(evt.target);
		
		if ($elem.hasClass('collapsed')) {
			$elem.removeClass('collapsed').slideDown();
			$targ.css('margin-bottom', '0px');
		}else {
			$elem.addClass('collapsed').slideUp();
			$targ.css('margin-bottom', '10px');
		}
		$rootScope.$broadcast('slidup');
		
	}
	
}]).controller('bannerController', ['$scope', '$rootScope', function($rootScope, $scope) {
		console.log($scope.something)
}]).controller('ctaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('feaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('tcsController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('codeController', ['$scope', '$rootScope', '$sce', 'mySharedService', function($rootScope, $scope, mySharedService) {
	
	//$scope.design = $rootScope.allTags;
//	console.log($scope.design)
//	console.log($rootScope.allTags)
//	
//	$rootScope.design = mySharedService.message;
//	console.log("Builds: " + $rootScope.design);
	
}]);
//codeController.$inject = ['$scope', 'share'];

/*
	buildArray = [];

	$('#viewer').empty();
	$('#sourceViewer>code').empty();
	//emptying old content
	
	for (var i = 0; i < $('xmp').length; i++) {
	
		var orig = $('xmp:eq(' +[i] +')').not($('.original xmp')).clone(true).html();
		//grab html data from each xmp tag using index
		
		buildArray.push($('xmp:eq(' +[i] +')').not($('.original xmp')).clone(true).html());
		
		var unes = unescape(orig);
		var escp = escape(orig)
		//var html = $.parseHTML(unes);
		
		$('#sourceViewer>code').append().text(buildArray);
		$('#viewer').append(orig);
	}
	*/