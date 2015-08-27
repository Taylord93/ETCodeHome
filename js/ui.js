/*
====================================================================================================
	Window Ready Event
====================================================================================================
*/

$(window).ready(function(){
	
	$('.build').addClass('collapsed').slideUp(0);
	$('.collapser').children().attr('class', 'fa fa-plus');
	$('.header').css('margin-bottom', '10px');
	
	$('.viewWrap').css({
		'max-height':$(window).innerHeight() - 45, 
		'overflow':'auto', 
		'margin-top':'-10px'
	});
	
	$('.delete').hover(function(){
		console.log("Hovered")
		$(this).parent().css('background', 'rgb(150, 50, 50)');
	}, function(){
		$(this).parent().css('background', 'none');
		
	});
	
	
	$('.add-section, .add-section .item').hover(function(){
		$(this).parent().css('background', 'RGB(91, 180, 0)');
	}, function(){
		$(this).parent().css('background', 'none');
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
	
	$('input').focus(function(){
		if ($(this).hasClass("dirty")) {
			
		}else {
			$(this).attr('placeholder', $(this).val()).val("");
			$(this).addClass("dirty");
		}
	});
	
});

/*
====================================================================================================
	Resize Events
====================================================================================================
*/

$(window).resize(function(){
	
	$('.viewWrap').css({
		'max-height':$(window).innerHeight() - 45, 
		'overflow':'auto', 
		'margin-top':'-10px'
	});
	
});

/*
====================================================================================================
	Click Events
====================================================================================================
*/



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

$('.header').click(function(event){

	event.preventDefault();
	
	if ($(this).next().hasClass('collapsed')) {
	
		$(this).next().removeClass('collapsed').slideDown();		
		$(this).css('margin-bottom', '0px');
		
	}else {
	
		$(this).next().addClass('collapsed').slideUp();
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

/*
====================================================================================================
	Hover Events
====================================================================================================
*/

console.log("Whts")

/*
====================================================================================================
	Input Events
====================================================================================================
*/

$('input').focus(function(){
	console.log("What")
	if ($(this).hasClass("dirty")) {
		
	}else {
		$(this).attr('placeholder', $(this).val()).val("");
		$(this).addClass("dirty");
	}
});