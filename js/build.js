/*
======================================================================================================
Create build object
======================================================================================================
*/

var $build = {
		'banner':$('#originals .banner.original').clone(true).removeClass('original'), 
		'cta':$('#originals .cta.original').clone(true).removeClass('original'), 
		'fea':$('#originals .fea.original').clone(true).removeClass('original'),
		'tcs':$('#originals .tcs.original').clone(true).removeClass('original')
	};
	
function newsection(x){
	var input = x.split(" ");
	var $retArr = [];
	
	for (var i = 0; i < input.length; i++) {
		
		if (input[i] == 'banner') {
			$retArr.push($('#originals .banner.original').clone(true).removeClass('original'));
		}else if (input[i] == 'cta') {
			$retArr.push($('#originals .cta.original').clone(true).removeClass('original'));
		}else if (input[i] == 'fea') {
			$retArr.push($('#originals .fea.original').clone(true).removeClass('original'));
		}else if (input[i] == 'tcs') {
			$retArr.push($('#originals .tcs.original').clone(true).removeClass('original'));
		}else {
			console.log("Error in newsection() call");
		}
	}
	return $retArr;
}
$('#sections').append(newsection('banner cta fea fea'));

/*
======================================================================================================
Edit Section
======================================================================================================
*/

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


/*
======================================================================================================
Add Section
======================================================================================================
*/



$('#mn-banner').click(function(event){
	event.preventDefault();
	$('#sections').append(newsection('banner'));
	appendToViewer();
});

$('#mn-cta').click(function(event){
	event.preventDefault();
	$('#sections').append(newsection('cta'));
	appendToViewer();
});

$('#mn-fea').click(function(event){
	event.preventDefault();
	$('#sections').append(newsection('fea'));
	appendToViewer();
});

$('#mn-tcs').click(function(event){
	event.preventDefault();
	$('#sections').append(newsection('tcs'));
	appendToViewer();
});




/*
======================================================================================================
Delete Section
======================================================================================================
*/




$('.delete').click(function(){
	
	var $section = $(this).parent().parent().parent().parent();
	
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
			appendToViewer(); 
		}
	});
	
});

