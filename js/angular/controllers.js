app.controller('globalController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
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
	
	$scope.newSection = function(evt, el, attr){
		
		if ($(evt.target).hasClass('item')) {
			var elemType = $(evt.target).attr('id');
		}else {
			var elemType = $(evt.target).parent().attr('id');
		}
		
		$rootScope.$broadcast('sectionCreated', { type : elemType });
		
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
	
	$scope.makeActive = function(evt){
		
		var $elem = $(evt.target).parent();
		var $targ = $(evt.target)
		
		if ($elem.hasClass('active') == false) {
			$elem.parent().find($('.active')).removeClass('active');
			$elem.addClass('active');
		}
	
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
	
}]).controller('bannerController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
}]).controller('ctaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('feaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('tcsController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
}]).controller('codeController', ['$scope', '$rootScope', '$sce', 'mySharedService', function($rootScope, $scope, mySharedService) {
	
}]);