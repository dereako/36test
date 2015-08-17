$(function() {
	var $window = $(window);

	$window.on('scroll', function(e) {
    	if ($window.scrollTop() >= 16) {
        	$('.logo__triangle-white').addClass('stick');
        } else {
        	$('.logo__triangle-white').removeClass('stick');
        }
    	if ($window.scrollTop() >= 56) {
        	$('.header').addClass('stick');
        } else {
        	$('.header').removeClass('stick');
        }
    	if ($window.scrollTop() >= 88) {
        	$('.navigation').addClass('white');
        } else {
        	$('.navigation').removeClass('white');
        }
	});
	
	init = function() {
		$('.navigation__menu, .navigation__close').on('click', function() {
			$('body').toggleClass('locked');
			$('.logo__mobile').toggleClass('open');
			$('.navigation').toggleClass('open');
		});
		
		$('.navigation a').hover(function() {
			$('.navigation a').not(this).toggleClass('light');
		});
		
		$('.footer__up').on('click', function() {
			scrollTo(0,0);
		});
	};
	
	return init();
});