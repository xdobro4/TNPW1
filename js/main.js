$(document).ready(function() {
	// mobile menu
	$('#mobile-menu-links').on('click', function () {
		$('nav').slideToggle();
		if($(this).hasClass('active')) $(this).addClass('active');
		else $(this).removeClass('active');
	});


	// resize
	var resizeTimer;

	function resizeFunction() {
		if(window.outerWidth > 580) {
			//console.log($('nav'));
			$('nav').attr('style', '');
		}
		$('#mobile-menu-links').removeClass('active');
	}

	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resizeFunction, 100); // timer pro resize aby nevytěžovalo tolik PC!!
	});

	// color box
	$('.project-image').colorbox({
		rel: 'projects',
		transition: "fade",
		width: "90%",
		height: "90%"
	});

});