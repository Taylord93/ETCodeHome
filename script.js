
$(document).ready(function(e) {
	
	var bannerWRAP = $.ajax({type: "GET", url: "partials/banner.html", async: false}).responseText;
	
	var introWRAP = $.ajax({type: "GET", url: "partials/intro.html", async: false}).responseText;
	
	var ctaWRAP = $.ajax({type: "GET", url: "partials/cta.html", async: false}).responseText;
	
	var feaWRAP = $.ajax({type: "GET", url: "partials/features.html", async: false}).responseText;
	
	var blockWRAP = $.ajax({type: "GET", url: "partials/blockwrap.html", async: false}).responseText;
	
    $('#form').submit(function( event ) {
  		event.preventDefault();
		
		//BUILD BANNER OUTPUT
		$('#build').append(bannerWRAP);
		$('#build a').attr("href", $('#bannerlink').val());
		$('#build img').attr("src", $('#bannerpath').val()).attr("title", $('#bannertitle').val()).attr("alt", $('#bannertitle').val());
		$('#bannerCode').val($('#build').html());
		$('#build').empty();
		
		//BUILD INTRO OUTPUT
		$('#build').append(introWRAP).append(ctaWRAP);
		$('#build #myCopy').replaceWith($('#intro').val());
		
		$('.myCTA').attr('href', $('#ctaLink').val()); // URL
		if($('#ctatype').val() == 'cta1') {
			$('.myCTA img').attr('src', 'http://image.exct.net/lib/fe5e15707d6c007a7410/m/1/shop-now.png').attr('title', 'Shop Now').attr('alt', 'Shop Now');
		}
		else {
			$('.myCTA img').attr('src', 'http://image.exct.net/lib/fe5e15707d6c007a7410/m/1/buy-now.png').attr('title', 'Buy Now').attr('alt', 'Buy Now');
		}
		$('.myCTA').removeClass('myCTA');
		$('#introCode').val($('#build').html());
		$('#build').empty();
		
		//BUILD FEATURES
		$('#build').append(feaWRAP);
		$('#build .f1a').attr("href", $('#fea1url').val()).removeClass('f1a');
		$('#build .f1i').attr("src", $('#fea1path').val()).attr("alt", $('#fea1cap').val()).removeClass('f1i');
		$('#build .f1c').text($('#fea1cap').val()).removeClass('f1c');
		
		$('#build .f2a').attr("href", $('#fea2url').val()).removeClass('f2a');
		$('#build .f2i').attr("src", $('#fea2path').val()).attr("alt", $('#fea2cap').val()).removeClass('f2i');;
		$('#build .f2c').text($('#fea2cap').val()).removeClass('f2c');
		
		$('#build .f3a').attr("href", $('#fea3url').val()).removeClass('f3a');
		$('#build .f3i').attr("src", $('#fea3path').val()).attr("alt", $('#fea3cap').val()).removeClass('f3i');
		$('#build .f3c').text($('#fea3cap').val()).removeClass('f3c');
		$('#feaCode').val($('#build').html());
		$('#build').empty();
		
		//BUILD FIRST TWO BLOCKS
		$('#build').append(blockWRAP);
		$('#build .block1a').attr("href", $('#block1url').val()).removeClass('block1a');
		$('#build .block1i').attr("src", $('#block1path').val()).attr("alt", $('#block1cap').val()).removeClass('block1i');
		$('#build .block1c').text($('#block1cap').val()).removeClass('block2c');
		
		$('#build .block2a').attr("href", $('#block2url').val()).removeClass('block2a');
		$('#build .block2i').attr("src", $('#block2path').val()).attr("alt", $('#block2cap').val()).removeClass('block2i');
		$('#build .block2c').text($('#block2cap').val()).removeClass('block2c');
		
		$('#block1Code').val($('#build').html());
		$('#build').empty();
		
		//BUILD SECOND TWO BLOCKS
		$('#build').append(blockWRAP);
		$('#build .block1a').attr("href", $('#block3url').val()).removeClass('block1a');
		$('#build .block1i').attr("src", $('#block3path').val()).attr("alt", $('#block3cap').val()).removeClass('block1i');
		$('#build .block1c').text($('#block3cap').val()).removeClass('block2c');
		
		$('#build .block2a').attr("href", $('#block4url').val()).removeClass('block2a');
		$('#build .block2i').attr("src", $('#block4path').val()).attr("alt", $('#block4cap').val()).removeClass('block2i');
		$('#build .block2c').text($('#block4cap').val()).removeClass('block2c');
		
		$('#block2Code').val($('#build').html());
		$('#build').empty();
	});
});