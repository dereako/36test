$(function() {
	var $window = $(window);

	$window.on('scroll', function(e){
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
	});
});