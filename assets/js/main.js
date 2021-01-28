(function ($) {
	'use strict';

	/* 1. Preloader */
	$(window).on('load', function () {
		$('#preloader-active').delay(450).fadeOut('slow');
		$('body').delay(450).css({
			overflow: 'visible',
		});
	});

	/* 2. sticky And Scroll UP */
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$('.header-sticky').removeClass('sticky-bar');
			$('#back-top').fadeOut(500);
		} else {
			$('.header-sticky').addClass('sticky-bar');
			$('#back-top').fadeIn(500);
		}
	});

	// Scroll Up
	// ! This will have to be modified when back-top a is setted up.
	$('#back-top a').on('click', function (e) {
		/*
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    
    */
		return false;
	});

	/* 3. slick Nav */
	// mobile_menu
	var menu = $('ul#navigation');
	if (menu.length) {
		menu.slicknav({
			prependTo: '.mobile_menu',
			closedSymbol: '+',
			openedSymbol: '-',
		});
	}

	$('.owl-carousel').owlCarousel({
		autoplay: true,
		center: true,
		loop: true,
		nav: true,
		items: 1,
	});

	/* 14. Datepicker */
	$('#datepicker1').datepicker();

	// 15. Time Picker
	$('#timepicker').timepicker();
})(jQuery);
