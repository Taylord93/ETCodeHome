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
	$scope.getcode = function(){
	
		//$(this).empty();
		buildArray = [];
		
		for (var i = 0; i < $('code.buildcode').length; i++) {
			buildArray.push($('code.buildcode:eq(' +[i] +')').clone(true).html());
			console.log($('code.buildcode:eq(' +[i] +')').html());
		}	
		
		console.log($('code.buildcode'));
		
		
		return buildArray;
		
	
	}
	$scope.something = function(){
		return "I am a string!";
	}
	/*
	$scope.viewsource = function($event){
		
		var $elem = $event.target;
		//event.preventDefault();
		
		if ($elem.hasClass("sourceOpen")) {
			$('xmp').slideUp();
			$elem.text("View Source").removeClass("sourceOpen");
			
			$('.edit').addClass('disabled').text('Edit Source');
			$('xmp').attr('contenteditable', 'false');
			$('.editing').removeClass('editing').attr('disabled', 'true');
		}else {
			$('xmp').slideUp();
			$('.sourceOpen').text("View Source").removeClass('sourceOpen');
			$elem.parent().siblings().slideDown();
			$elem.text("Hide Source").addClass("sourceOpen");
			$('.edit').removeClass('disabled').removeAttr('disabled');
		}
		
		console.log($event);
		console.log($elem);
		console.log($(this));
	}
	*/
	
}]).controller('bannerController', ['$scope', function($scope) {
		
}]).controller('ctaController', ['$scope', function($scope) {
		
}]).controller('feaController', ['$scope', function($scope) {
		
}]).controller('tcsController', ['$scope', function($scope) {
		
}]);



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