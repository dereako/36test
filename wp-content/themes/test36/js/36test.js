$(function() {
	/* 3 jQuery dependencies were loaded from plugins.js:
	       -QueryLoader v2.9.0
		   -Waypoints v2.0.4
		   -Mousewheel v3.1.11
	 */
	var $window = $(window),
		windowH = $window.height(),
		windowW = $window.width(),
		movingBlock = $('.block'),
        inertiaWrapper = $('.movement'),
        items = $('[data-speed]'),
        inertiaScrollTop = 0,
        mouseX = 0,
        mouseY = 0,
        isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
        scrollTop = 0,
        mouseWheel = false,
        isTouchDevice,
		draw;

	// Trigger the animations needed for the sticky nav transitions
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
	
	// Initialize the parallax effect
    buildParallax = function() {
        resizeParallax();
        var $scrollTop = 0;
        inertiaWrapper.data('top', 0);

        items.each(function( indx ) {
           $(this).data("height", $(this).innerHeight());
           $(this).data("offset-top", $(this).offset().top - $(window).scrollTop());
           $(this).data("opacity", 0);
           $(this).data("offset-x", 0); 
           $(this).data("offset-y", 0);
           $(this).data("mouse-offset-x", 0);
           $(this).data("mouse-offset-y", 0);
        });

        window.scrollTo(0, $scrollTop);
        inertiaScrollTop = scrollTop = $scrollTop;

        if (!isMobile) {
			inHeight = inertiaWrapper.height() - windowH/2;
            inertiaWrapper.css('-moz-transform','translate3d(0,-' + inHeight + 'px, 0)');
            inertiaWrapper.css('-webkit-transform','translate3d(0,-' + inHeight + 'px, 0)');
            inertiaWrapper.css('-o-transform','translate3d(0,-' + inHeight + 'px, 0)');
            inertiaWrapper.css('transform','translate3d(0,-' + inHeight + 'px, 0)');
            
            inertiaWrapper.data('top', $scrollTop);
    
            items.each(function( indx ) {
                var offsetX = 0,
                    speed = $(this).data('speed'),
                    movementSpeed = $(this).data('movement-speed'),
                    height = $(this).data('height'),
                    offsetTop = $(this).data("offset-top"),
                    mouseOffsetX = $(this).data("mouse-offset-x"),
                    mouseOffsetY = $(this).data("mouse-offset-y"),
                    offsetY = $(this).data("offset-y"),
                    newOffsetY = $scrollTop - windowH/2 - height/2 - offsetTop;
					
                offsetY = -1 * newOffsetY * speed/20;
               
                if (Modernizr.csstransforms3d) {
                    $(this).css('-moz-transform','translate3d(0px, ' + offsetY + 'px, 0)');
                    $(this).css('-webkit-transform','translate3d(0px, ' + offsetY + 'px, 0)');
                    $(this).css('-o-transform','translate3d(0px, ' + offsetY + 'px, 0)');
                    $(this).css('transform','translate3d(0px, ' + offsetY + 'px, 0)');
                } else if (Modernizr.csstransitions) {
                    $(this).css('-moz-transform','translateY(' + offsetY + 'px)');
                    $(this).css('-webkit-transform','translateY(' + offsetY + 'px)');
                    $(this).css('-o-transform','translateY(' + offsetY + 'px)');
                    $(this).css('transform','translateY(' + offsetY + 'px)');
                }
    
                $(this).data("mouse-offset-x", mouseOffsetX);
                $(this).data("mouse-offset-y", mouseOffsetY);
                $(this).data("offset-y", offsetY);
            });
            
            draw();
        }
    };

	// Adjust dimensions when the window's size changes
    resizeParallax = function() {
        windowH = $(window).height();
        windowW = $(window).width();
        if (windowW < 840) {
            $('.container').css('height', '100%');
		} else {
			if ($('.container').length && $('.block').length) {
				containerEnd = $('.block:last-child').offset().top + $('.block:last-child').height();
				$('.container').height(containerEnd);
			}
		}
        $('.main').height(inertiaWrapper.height());
	};
	
	// Main parallax control, updated constantly
    updateParallax = function() {
        var scrollDiff;
    
        inertiaScrollTop += 0.05 * (scrollTop - inertiaScrollTop + windowH/2);
        scrollDiff = inertiaScrollTop - scrollTop;

        if (Math.abs(scrollDiff) < 0.01) {
			inertiaScrollTop = scrollTop;
		}
        
        if ((Modernizr.csstransforms3d || Modernizr.csstransitions) && !isTouchDevice) {
            var container_top = inertiaWrapper.data('top');
            
            container_top += 0.2 * (scrollTop - container_top);
            c_top = -container_top;
        
            inertiaWrapper.css('-moz-transform','translate3d(0,' + c_top + 'px, 0)');
            inertiaWrapper.css('-webkit-transform','translate3d(0,' + c_top + 'px, 0)');
            inertiaWrapper.css('-o-transform','translate3d(0,' + c_top + 'px, 0)');
            inertiaWrapper.css('transform','translate3d(0,' + c_top + 'px, 0)');
        
            inertiaWrapper.data('top', container_top);
        }
    
        items.each(function(indx) {
            var offsetX = 0,
                speed = $(this).data('speed'),
                movementSpeed = $(this).data('movement-speed'),
                height = $(this).data('height'),
                offsetTop = $(this).data("offset-top"),
                opacity = $(this).data("opacity"),
                mouseOffsetX = $(this).data("mouse-offset-x"),
                mouseOffsetY = $(this).data("mouse-offset-y"),
                offsetY = $(this).data("offset-y"),
                side = $(this).data("side"),
                waypointOffset,
                waypointOffsetX = 0,
                waypointOffsetY = 0,
                newOffsetY = inertiaScrollTop - windowH/2 - height/2 - offsetTop;

            offsetY = - newOffsetY * speed/20;

            // mouse movement
            height = movementSpeed * 10/ windowH;
            width = movementSpeed * 10 / windowW;
            pageX = mouseX - (windowW / 2);
            pageY = mouseY - (windowH / 2);
    
            var newOffsetX = width * pageX * -1;
            newOffsetY = height * pageY * -1;
            mouseOffsetX += (newOffsetX - mouseOffsetX)/ 20;
            mouseOffsetY += (newOffsetY - mouseOffsetY)/ 20;
			
			
            // Waypoints
            if (side) {
                waypointOffset = (offsetTop + offsetY + mouseOffsetY - inertiaScrollTop) / (windowH / 2 - height / 2); 
				if (waypointOffset < 0) {
					waypointOffset = 0;
				} else if (waypointOffset > 1) {
					waypointOffset = 1;
				}
				// From the bottom instead of sides
                waypointOffsetY = (windowH/2 + height) * waypointOffset;
            }
            offsetX = mouseOffsetX + waypointOffsetX;
            offsetY = offsetY + mouseOffsetY + waypointOffsetY;
			
			// Fade in
			if (opacity < 1) {
				if (offsetTop < scrollTop + windowH) {
					$(this).css('opacity', 1-waypointOffset);
				}
			}
			
            if (Modernizr.csstransforms3d) {
                $(this).css('-moz-transform','translate3d(' + offsetX +'px, ' + offsetY + 'px, 0)');
                $(this).css('-webkit-transform','translate3d(' + offsetX +'px, ' + offsetY + 'px, 0)');
                $(this).css('-o-transform','translate3d(' + offsetX +'px, ' + offsetY + 'px, 0)');
                $(this).css('transform','translate3d(' + offsetX +'px, ' + offsetY + 'px, 0)');
            } else if (Modernizr.csstransitions) {
                $(this).css('-moz-transform','translateY(' + offsetY + 'px)');
                $(this).css('-webkit-transform','translateY(' + offsetY + 'px)');
                $(this).css('-o-transform','translateY(' + offsetY + 'px)');
                $(this).css('transform','translateY(' + offsetY + 'px)');
            }
    
            $(this).data("mouse-offset-x", mouseOffsetX);
            $(this).data("mouse-offset-y", mouseOffsetY);
            $(this).data("offset-y", offsetY);
            $(this).data("offsetTop", offsetTop);
            $(this).data("opacity", opacity);
		});
    };

	// Load all images first
    initQueryLoader = function() {
		if ($('img').length) {
			$("body").queryLoader2({
				backgroundColor: '#fff',
				barColor: '#333',
				barHeight: 6,
				onComplete: function() {
					// Always start at the top
					window.scrollTo(0, 0);
					$('#wrap').addClass('visible');
					mouseWheel = true;
				}
        	});
		} else {
			$('#wrap').addClass('visible');
		}
    };
	
    preparePage = function() {
        if (!Modernizr.csstransforms3d) {
            $('.movement').css('position', 'absolute');
        }
    };

    draw = function() {
        if (windowW > 840) {
            updateParallax();
        }
        requestAnimFrame(draw);
    };

    isTouchDevice = function(){
        return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
    };
    window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
            };
	})();
	
	// Start everything off, like a document.ready
	init = function() {
		// Set up listeners
        $('body').on('mousemove', function(e) {
            mouseX = e.screenX;
            mouseY = e.screenY;
        });
		$('body').on('mousewheel', function(e) {
            if (!mouseWheel) {
                e.preventDefault();
            }
        });
		$window.on('resize', function() {
            resizeParallax();
        });
		$window.on('scroll', function() {
            scrollTop = $window.scrollTop();
        });
		
		isTouchDevice = isTouchDevice();
		preparePage();
        buildParallax();
		initQueryLoader();
		
		// Clicking navigation animations
		$('.navigation__menu, .navigation__close').on('click', function() {
			$('body').toggleClass('locked');
			$('.logo__mobile').toggleClass('open');
			$('.navigation').toggleClass('open');
		});
		$('.navigation a').hover(function() {
			$('.navigation a').not(this).toggleClass('light');
		});
		
		// Back to top
		$('.footer__up').on('click', function() {
			$('html, body').animate({'scrollTop': 0}, 1000);
		});
	};
	
	init();
});