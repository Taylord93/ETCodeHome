/*
$(document).ready(function(e) {
	
	
	var bannerWRAP = $.ajax({type: "GET", url: "partials/banner.html", async: false}).responseText;
	
	var introWRAP = $.ajax({type: "GET", url: "partials/intro.html", async: false}).responseText;
	
	var ctaWRAP = $.ajax({type: "GET", url: "partials/cta.html", async: false}).responseText;
	
	var feaWRAP = $.ajax({type: "GET", url: "partials/features.html", async: false}).responseText;
	
	var blockWRAP = $.ajax({type: "GET", url: "partials/blockwrap.html", async: false}).responseText;
	
	
	//Not working in chrome (localhost http request) temporarily based in vars.js file.
	
	var $buildArray = [];
	
    $('#form').submit(function( event ) {
  		
  		event.preventDefault();
		
		$('.inactive').removeClass('inactive');
		
		if ($('#form input[type="submit"]').hasClass('errorAnimated')) {
			$('#form input[type="submit"]').removeClass('errorAnimated');
		}
		
		$('#form input[type="submit"]').addClass('done');
		
		$('.controls input[type="submit"]').val("Code Generated");
		
		$buildArray = [];
		
		//BUILD BANNER OUTPUT
		$('#build').append(bannerWRAP);
		$('#build a').attr("href", $('#bannerlink').val());
		$('#build img').attr("src", $('#bannerpath').val()).attr("title", $('#bannertitle').val()).attr("alt", $('#bannertitle').val());
		$('#bannerCode').val($('#build').html());
		$buildArray.push($('#bannerCode').val());
		$('#build').empty();
		
		//BUILD INTRO OUTPUT
		$('#build').append(introWRAP).append(ctaWRAP);
		$('#build #myCopy').replaceWith($('#intro').val());
		
		$('.myCTA').attr('href', $('#ctaLink').val()); // URL
		
		if($('#ctatype').val() == 'cta1') {
			$('.myCTA img').attr('src', 'http://image.exct.net/lib/fe5e15707d6c007a7410/m/1/shop-now.png').attr('title', 'Shop Now').attr('alt', 'Shop Now');
		}else if ($('#ctatype').val() == 'cta2'){
			$('.myCTA img').attr('src', 'http://image.exct.net/lib/fe5e15707d6c007a7410/m/1/buy-now.png').attr('title', 'Buy Now').attr('alt', 'Buy Now');
		}else if ($('#ctatype').val() == 'cta3'){
			$('.myCTA img').attr('src', 'http://image.exct.net/lib/fe5e15707d6c007a7410/m/1/learn-more.png').attr('title', 'Buy Now').attr('alt', 'Learn More');
		}else {
			$('.myCTA img').attr('src', 'http://image.exct.net/lib/fe5e15707d6c007a7410/m/1/enter-to-win.png').attr('title', 'Buy Now').attr('alt', 'Enter to Win');
		}
		
		$('.myCTA').removeClass('myCTA');
		$('#introCode').val($('#build').html());
		$buildArray.push($('#introCode').val());
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
		$buildArray.push($('#feaCode').val());
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
		$buildArray.push($('#block1Code').val());
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
		$buildArray.push($('#block2Code').val());
		$('#build').empty();
	});
	
	$('#formContainer').addClass('active');
	
	$('#previewButton').click(function(event){
	
		event.preventDefault();
		
		if ($buildArray.length == 0) {
			$('#form input[type="submit"]').addClass('errorAnimated');
		}else{
			$('.active').fadeOut(0);
			$('.active').removeClass('active');
			$('#preview').fadeIn(0);
			$('#preview').addClass('active');
			$('#preview>.container').append($buildArray);
		}

	});
	
	$('#sourceButton').click(function(event){
	
		event.preventDefault();
		
		if ($buildArray.length == 0) {
			$('#form input[type="submit"]').addClass('errorAnimated');
		}else{
			$('.active').fadeOut(0);
			$('.active').removeClass('active');
			$('#source').fadeIn(0);
			$('#source').addClass('active');
			$('#source>.container').text($buildArray).append();
		}
	
	});
	
	$('#clearButton').click(function(event){
	
		event.preventDefault();
		
		if ($buildArray.length == 0) {
			$('#form input[type="submit"]').addClass('errorAnimated');
		}else{
			$buildArray.length = [];
			$('textarea').val("");
			$('#form input[type="submit"]').removeClass('done');
			$('.controls input[type="submit"]').val("Generate Code");
			$('.button').addClass('inactive');
		}
	
	});
	
	$('.exit').click(function(event){
	
		event.preventDefault();
		
		$('.active').fadeOut(0);
		$('.active').removeClass('active');
		$('.container').empty();
		
		$('#formContainer').fadeIn(0);
		$('#formContainer').addClass('active');
	
	});	
	
});
*/

$(window).ready(function(){
	
	for (var i = 0; i < $('xmp').length; i++) {
		var orig = $('xmp:eq(' +[i] +')').clone(true).html();
		var unes = unescape(orig);
		var html = $.parseHTML(unes);
		$('#viewer').append(html);
	}
	
});

$('#viewer').css({
	'max-height':$(window).innerHeight() - 45, 
	'overflow':'auto'
});

$('input, textarea, select').focus(function(){
	
	if ($(this).hasClass("dirty")) {
		
	}else {
		$(this).val("");
		$(this).addClass("dirty");
	}
});

/*
$('input[type="text"], textarea, select, xmp').change(function(){
	
	$('#viewer').empty();

	for (var i = 0; i < $('xmp').length; i++) {
		var orig = $('xmp:eq(' +[i] +')').clone(true).html();
		var unes = unescape(orig);
		var html = $.parseHTML(unes);
		$('#viewer').append(html);
	}
	
});
*/
function appendToViewer(){

	$('#viewer').empty();
	
	for (var i = 0; i < $('xmp').length; i++) {
		var orig = $('xmp:eq(' +[i] +')').clone(true).html();
		var unes = unescape(orig);
		var html = $.parseHTML(unes);
		$('#viewer').append(html);
	}
	
}

$('input[type="text"], textarea, select').on('input change click focus', function(){
	
	appendToViewer();
	
});


$('.source').click(function(event){
	
	event.preventDefault();

	if ($(this).hasClass("sourceOpen")) {
		$('xmp').slideUp();
		$(this).text("View Source").removeClass("sourceOpen");
		
		$('.edit').addClass('disabled').text('Edit Source');
		$('xmp').attr('contenteditable', 'false');
		$('.editing').removeClass('editing').attr('disabled', 'true');
	}else {
		$('xmp').slideUp();
		$('.sourceOpen').text("View Source").removeClass('sourceOpen');
		$(this).parent().siblings().slideDown();
		$(this).text("Hide Source").addClass("sourceOpen");
		$('.edit').removeClass('disabled').removeAttr('disabled');
	}

});
$('.edit').click(function(event){
	
	event.preventDefault();

	if ($(this).hasClass('editing')) {
		$(this).text('Edit Source').removeClass('editing');
		$('xmp').attr('contenteditable', 'false');
	}else {	
		$(this).text('End Edits').addClass('editing');
		$('xmp').attr('contenteditable', 'true');
	}
	

});

$('.collapser').click(function(event){

	event.preventDefault();
	
	parCla = $(this).parent().parent().parent().parent().attr('class');
	
	if ($('.build.'+parCla).hasClass('collapsed')) {
	
		$('.build.'+parCla).removeClass('collapsed').slideDown();
		$(this).children().attr('class', 'fa fa-minus');
		$(this).parent().parent().parent().css('margin-bottom', '0px');
		
	}else {
	
		$('.build.'+parCla).addClass('collapsed').slideUp();
		$(this).children().attr('class', 'fa fa-plus');
		$(this).parent().parent().parent().css('margin-bottom', '10px');
		
	}
	
	console.log(parCla)

});
$('.collapseAll').click(function(event){

	event.preventDefault();
	
	$('.build').addClass('collapsed').slideUp();
	$('.collapser').children().attr('class', 'fa fa-plus');
	$('.header').css('margin-bottom', '10px');

});
