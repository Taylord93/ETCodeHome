var $iframeView = $('#emailPreviewFrame');

$iframeView.ready(function(){
	$iframeView.contents().find("body").html($("<div></div>").append('<h2>This was appended!</h2>').html());
	//$iframeView.contents().find('body').append('<h2>THis was appended</h2>');
	console.log($iframeView.contents())
	console.log($iframeView.contents().find('body'));
	console.log($iframeView.contents().find('body').contents());
	console.log($iframeView.contents().html('<h1></h1>'));
	console.log($iframeView.contents().find("body").html($("<div></div>")))
	console.log($iframeView.find('#appender'));
	//$iframeView.contents().find('body').html().prepend('<h2>THis was appended</h2>');
	$iframeView.contents().find("h1")
	
});

$(window).ready(function(){
	
	for (var i = 0; i < $('xmp').length; i++) {
	
		var orig = $('xmp:eq(' +[i] +')').clone(true).html();
		var unes = unescape(orig);
		var html = $.parseHTML(unes);
		var formhtml = $.htmlClean(orig, { format: true });
		
		$('#viewer').append(html);
		$('#sourceViewer').append(formhtml);
		
	}
	
});

$(window).resize(function(){
	
	$('.viewWrap').css({
		'max-height':$(window).innerHeight() - 45, 
		'overflow':'auto', 
		'margin-top':'-10px'
	});
	
});

$('.viewWrap').css({
	'max-height':$(window).innerHeight() - 45, 
	'overflow':'auto', 
	'margin-top':'-10px'
});

$('input, textarea, select').focus(function(){
	
	if ($(this).hasClass("dirty")) {
		
	}else {
		$(this).val("");
		$(this).addClass("dirty");
	}
});

function appendToViewer(){

	$('#viewer').empty();
	$('#sourceViewer').empty();
	//emptying old content
	
	for (var i = 0; i < $('xmp').length; i++) {
		var orig = $('xmp:eq(' +[i] +')').clone(true).html();
		//grab html data from each xmp tag using index
		var unes = unescape(orig);
		var escp = escape(orig)
		//var html = $.parseHTML(unes);
		$('#sourceViewer').append(orig);
		$('#viewer').append(orig);
	}
	
}

//Appends input (design and source) on each input / focus / click / change onto an input element using function above

$('input[type="text"], textarea, select').on('input change click focus', function(){appendToViewer();});

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
	
	if ($(this).parent().parent().parent().next().hasClass('collapsed')) {
	
		$(this).parent().parent().parent().next().removeClass('collapsed').slideDown();
		$(this).children().attr('class', 'fa fa-minus');
		$(this).parent().parent().parent().css('margin-bottom', '0px');
		
	}else {
	
		$(this).parent().parent().parent().next().addClass('collapsed').slideUp();
		$(this).children().attr('class', 'fa fa-plus');
		$(this).parent().parent().parent().css('margin-bottom', '10px');
		
	}

});

$('.collapseAll').click(function(event){

	event.preventDefault();
	
	$('.build').addClass('collapsed').slideUp();
	$('.collapser').children().attr('class', 'fa fa-plus');
	$('.header').css('margin-bottom', '10px');

});
