$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');

	var nav = $('.panel__nav'),
			btnNav = $('.panel__btn');



	btnNav.click(function(event) {
		nav.toggleClass('panel__nav_toggle')
		$(this).toggleClass('panel__btn_toggle');
	});

	$('.header__girl div').parallax({
		// mouseport: $(".header_main"),
		xparallax: '50px',
		yparallax: '150px'
	});
});
