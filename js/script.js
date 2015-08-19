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

function appendToViewer(){

	myArray = []

	$('#viewer').empty();
	$('#sourceViewer>code').empty();
	//emptying old content
	
	for (var i = 0; i < $('xmp').length; i++) {
	
		var orig = $('xmp:eq(' +[i] +')').clone(true).html();
		//grab html data from each xmp tag using index
		
		myArray.push($('xmp:eq(' +[i] +')').clone(true).html());
		
		var unes = unescape(orig);
		var escp = escape(orig)
		//var html = $.parseHTML(unes);
		
		$('#sourceViewer>code').append().text(myArray);
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
		$(this).val("");
		$(this).addClass("dirty");
	}
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

$('.collapseAll').click(function(){
	
	$('.build').addClass('collapsed').slideUp();
	$('.collapser').children().attr('class', 'fa fa-plus');
	$('.header').css('margin-bottom', '10px');

});
$('.expandAll').click(function(){
	
	$('.build').removeClass('collapsed').slideDown();
	$('.collapser').children().attr('class', 'fa fa-minus');
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




/*

	HTML Code Formatting

*/

var the = {
            use_codemirror: (!window.location.href.match(/without-codemirror/)),
            beautify_in_progress: false,
            editor: null // codemirror editor
        };

        function run_tests() {
            var st = new SanityTest();
            run_javascript_tests(st, Urlencoded, js_beautify, html_beautify, css_beautify);
            run_css_tests(st, Urlencoded, js_beautify, html_beautify, css_beautify);
            run_html_tests(st, Urlencoded, js_beautify, html_beautify, css_beautify);
            JavascriptObfuscator.run_tests(st);
            P_A_C_K_E_R.run_tests(st);
            Urlencoded.run_tests(st);
            MyObfuscate.run_tests(st);
            var results = st.results_raw()
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/ /g, '&nbsp;')
                .replace(/\r/g, '·')
                .replace(/\n/g, '<br>');
            $('#testresults').html(results).show();
        }


        function any(a, b) {
            return a || b;
        }

        function unpacker_filter(source) {
            var trailing_comments = '',
                comment = '',
                unpacked = '',
                found = false;

            // cut trailing comments
            do {
                found = false;
                if (/^\s*\/\*/.test(source)) {
                    found = true;
                    comment = source.substr(0, source.indexOf('*/') + 2);
                    source = source.substr(comment.length).replace(/^\s+/, '');
                    trailing_comments += comment + "\n";
                } else if (/^\s*\/\//.test(source)) {
                    found = true;
                    comment = source.match(/^\s*\/\/.*/)[0];
                    source = source.substr(comment.length).replace(/^\s+/, '');
                    trailing_comments += comment + "\n";
                }
            } while (found);

            var unpackers = [P_A_C_K_E_R, Urlencoded, /*JavascriptObfuscator,*/ MyObfuscate];
            for (var i = 0; i < unpackers.length; i++) {
                if (unpackers[i].detect(source)) {
                    unpacked = unpackers[i].unpack(source);
                    if (unpacked != source) {
                        source = unpacker_filter(unpacked);
                    }
                }
            }

            return trailing_comments + source;
        }


        function beautify() {
            if (the.beautify_in_progress) return;

            store_settings_to_cookie();

            the.beautify_in_progress = true;

            var source = the.editor ? the.editor.getValue() : $('#source').val(),
                output,
                opts = {};

            opts.indent_size = 1;
            //opts.indent_char = opts.indent_size == 1 ? '\t' : ' ';
            //opts.max_preserve_newlines = $('#max-preserve-newlines').val();
            //opts.preserve_newlines = opts.max_preserve_newlines !== "-1";
            //opts.keep_array_indentation = $('#keep-array-indentation').prop('checked');
            //opts.break_chained_methods = $('#break-chained-methods').prop('checked');
            //opts.indent_scripts = $('#indent-scripts').val();
            //opts.brace_style = $('#brace-style').val();
            //opts.space_before_conditional = $('#space-before-conditional').prop('checked');
            //opts.unescape_strings = $('#unescape-strings').prop('checked');
            //opts.jslint_happy = $('#jslint-happy').prop('checked');
            //opts.end_with_newline = $('#end-with-newline').prop('checked');
            //opts.wrap_line_length = $('#wrap-line-length').val();
            //opts.indent_inner_html = $('#indent-inner-html').prop('checked');
            //opts.comma_first = $('#comma-first').prop('checked');
            //opts.e4x = $('#e4x').prop('checked');

            if (looks_like_html(source)) {
                output = html_beautify(source, opts);
            } else {
                if ($('#detect-packers').prop('checked')) {
                    source = unpacker_filter(source);
                }
                output = js_beautify(source, opts);
            }
            if (the.editor) {
                the.editor.setValue(output);
            } else {
                $('#source').val(output);
            }

            the.beautify_in_progress = false;
        }

        function looks_like_html(source) {
            // <foo> - looks like html
            // <!--\nalert('foo!');\n--> - doesn't look like html

            var trimmed = source.replace(/^[ \t\n\r]+/, '');
            var comment_mark = '<' + '!-' + '-';
            return (trimmed && (trimmed.substring(0, 1) === '<' && trimmed.substring(0, 4) !== comment_mark));
        }
        $('#viewer').change(beautify);
