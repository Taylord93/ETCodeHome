app.filter('rawHtml', ['$sce', function($sce){
	return function(val) {
		return $sce.trustAsHtml(val);
	};
}]).filter('sanitize', ['$sce', function($sce){
	return function(val) {
		
		var escArr = [];
		
		var splitText = val.split('');
		
		for (var i = 0; i < splitText.length; i++) {
		
			escArr.push(splitText[i].replace(/\</g, '&lt;').replace(/\>/g,'&gt;').replace(/\©/g,'&copy;').replace(/\®/g,'&reg;').replace(/\™/g,'&trade;').replace(/\ /g,'&nbsp;'));
		
		}
		
		var joinedup = escArr.join("");
		return $sce.trustAsHtml(joinedup);
		
	};
}])

