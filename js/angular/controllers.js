app.controller('globalController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
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
				//$section.$destroy();
				$rootScope.$broadcast('elementsDestroyed');
				$rootScope.$broadcast('objectDeleted');
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
	
}]).controller('bannerController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
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