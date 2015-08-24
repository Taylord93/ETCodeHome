var buildArray = [];

function appendToViewer(){

	buildArray = [];

	$('#viewer').empty();
	$('#sourceViewer code').empty();
	//emptying old content
	
	for (var i = 0; i < $('xmp').length; i++) {
	
		var orig = $('xmp:eq(' +[i] +')').not($('.original xmp')).clone(true).html();
		//grab html data from each xmp tag using index
		
		buildArray.push($('xmp:eq(' +[i] +')').not($('.original xmp')).clone(true).html());
		
		var prismized = Prism.tokenize(buildArray, Prism.languages.markup);
		
		$('#sourceViewer code').append().text(buildArray);
		$('#viewer').append(orig);
	}
		
}



$('.viewWrap').css({
	'max-height':$(window).innerHeight() - 45, 
	'overflow':'auto', 
	'margin-top':'-10px'
});



$('input, textarea, select').focus(function(){
	
	if ($(this).hasClass("dirty")) {
		
	}else {
		$(this).attr('placeholder', $(this).val()).val("");
		$(this).addClass("dirty");
	}
});

$('.source').click(function(event){
	
	event.preventDefault();

	if ($(this).hasClass("sourceOpen")) {
		$('.xmp').slideUp();
		$(this).text("View Source").removeClass("sourceOpen");
		
		$('.edit').addClass('disabled').text('Edit Source');
		$('.xmp, code, xmp').attr('contenteditable', 'false');
		$('.editing').removeClass('editing').attr('disabled', 'true');
	}else {
		$('.xmp').slideUp();
		$('.sourceOpen').text("View Source").removeClass('sourceOpen');
		$(this).parent().siblings().slideDown();
		$(this).text("Hide Source").addClass("sourceOpen");
		$('.edit').removeClass('disabled').removeAttr('disabled');
	}

});


$('.header').click(function(event){

	event.preventDefault();
	
	if ($(this).next().hasClass('collapsed')) {
	
		$(this).next().removeClass('collapsed').slideDown();
		//$(this).children().attr('class', 'fa fa-minus');
		$(this).css('margin-bottom', '0px');
		
	}else {
	
		$(this).next().addClass('collapsed').slideUp();
		//$(this).children().attr('class', 'fa fa-plus');
		$(this).css('margin-bottom', '10px');
		
	}

});




$('.header a').click(function(event){
	
	event.stopPropagation();
	
});

$('.collapseAll').click(function(){
	
	$('.build').addClass('collapsed').slideUp();
	//$('.collapser').children().attr('class', 'fa fa-plus');
	$('.header').css('margin-bottom', '10px');

});
$('.expandAll').click(function(){
	
	$('.build').removeClass('collapsed').slideDown();
	//$('.collapser').children().attr('class', 'fa fa-minus');
	$('.header').css('margin-bottom', '0px');

});
$('#showCode').click(function(event){

	event.preventDefault();

	$('#showDesign').parent().removeClass('active');
	$('#showCode').parent().addClass('active');
	$('#viewer').css('display', 'none');
	$('#sourceViewer').css('display', 'inherit');

});
$('#showDesign').click(function(event){

	event.preventDefault();

	$('#showCode').parent().removeClass('active');
	$('#showDesign').parent().addClass('active');
	$('#sourceViewer').css('display', 'none');
	$('#viewer').css('display', 'inherit');

});







$(window).ready(function(){
	
	appendToViewer();
	
	//Appends input (design and source) on each input / focus / click / change onto an input element using function above
	$('#disableImg').click(function(){appendToViewer();});
	$('input[type="text"], textarea, select').on('input change click focus', function(){appendToViewer();});
	
	$('.build').addClass('collapsed').slideUp(0);
	$('.collapser').children().attr('class', 'fa fa-plus');
	$('.header').css('margin-bottom', '10px');
	
});

$(window).resize(function(){
	
	$('.viewWrap').css({
		'max-height':$(window).innerHeight() - 45, 
		'overflow':'auto', 
		'margin-top':'-10px'
	});
	
});

