app.controller('globalController', ['$scope', '$rootScope', function($rootScope, $scope) {
	
	$scope.someString = "HIIII";
	
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
	$scope.tester = function(elem, attr, scope){
		
		console.log(elem);
		console.log(attr);
		console.log(scope);
		
	}
	
	$scope.banner = 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/gen-code/banner.html';
	$scope.cta = 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/gen-code/banner.html';
	$scope.fea = 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/gen-code/banner.html';
	$scope.tcs = 'file:///Users/DevonTaylor/Documents/Web%20Dev/ETCodeHome/partials/gen-code/banner.html';
	
	$scope.asdf = function(){
		
		return angular.copy($scope.idk);
		
	}
	
}]).controller('bannerController', ['$scope', '$rootScope', function($rootScope, $scope) {
		console.log($scope.something)
}]).controller('ctaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('feaController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('tcsController', ['$scope', '$rootScope', function($rootScope, $scope) {
		
}]).controller('codeController', ['$scope', '$rootScope', '$sce', function($rootScope, $scope) {
	
	console.log($rootScope.someString);
	
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