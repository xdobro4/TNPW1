$(document).ready(function() {
	// mobile menu
	$('#mobile-menu-links').on('click', function() {
		$('nav').slideToggle();
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}
	});

});