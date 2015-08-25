/*
=================================================================================================================================
Default Layout, appends on load
=================================================================================================================================
*/

$('#sections').append(newsection('banner cta fea tcs tcs'));

/*
=================================================================================================================================

Alternative layouts

	banner = Top banner
	cta = Copy and button(s)
	fea = Three column section
	tcs = Two column section
	
=================================================================================================================================
*/

//Default
$('#default-layout').click(function(){$('#sections').empty().append(newsection('banner cta fea tcs tcs')); appendToViewer()});
//Product Alert
$('#product-alert-layout').click(function(){$('#sections').empty().append(newsection('banner cta tcs tcs')); appendToViewer()});
//Product Update
$('#product-update-layout').click(function(){$('#sections').empty().append(newsection('banner fea tcs tcs')); appendToViewer()});