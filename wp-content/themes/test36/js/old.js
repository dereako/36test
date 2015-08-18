
	var $window = $(window),
		windowH = $window.height(),
		windowW = $window.width(),
		movingBlock = $('.block'),
		container = $window,
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

	/* Trigger the animations needed for the sticky nav transitions */
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
	
	
    buildParallax = function() {
        resizeParallax();
		
        var $scrollTop = 0;
		/*var $scrollTop = inertiaWrapper.height() - windowH;*/

        inertiaWrapper.data('top', 0);

        items.each(function( indx ) {
           $(this).data("height", $(this).innerHeight());
           $(this).data("offset-top", $(this).offset().top - $(window).scrollTop());
           $(this).data("offset-x", 0); 
           $(this).data("offset-y", 0);
           $(this).data("mouse-offset-x", 0);
           $(this).data("mouse-offset-y", 0);
        });

        window.scrollTo(0, $scrollTop);
		
        inertiaScrollTop = scrollTop = $scrollTop;

        if (!isMobile) {
			/* use the height? */
			inHeight = inertiaWrapper.height();
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
                    newOffsetY = $scrollTop + windowH/2 - height/2 - offsetTop;
    			/* no longer negative -1 * */
                offsetY = newOffsetY * speed/20;
               
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

    resizeParallax = function() {
        windowH = $(window).height();
        windowW = $(window).width();
		if ($('.container').length && $('.block').length) {
			containerEnd = $('.block:last-child').offset().top + $('.block:last-child').height();
			$('.container').height(containerEnd);
		}
        /* COME BACK!
		$('.container').height($('.b-image__img_head').height() + $('.b-image__img_tiles').height() + $('.b-image__img_camera').height() + $('.b-image__img_drawings').height() + $('.b-image__img_wood').height());
        $('.b-page').css('height', windowH);
        scrollIndicate.css('overflow', 'visible');
        scrollIndicate.css('height', windowH/2);
        scrollIndicate.css('top', (-windowH/4)-10);
        $('.b-page_4 .b-scroll-indicate').css({
            'height': windowH/2 + 200,
            'top': -(windowH/4) - 210
        });
        $('.b-scroll-indicate_second').css({
            'height': $('.b-image__img_head').height() + $('.b-image__img_tiles').height() + $('.b-image__img_camera').height() + $('.b-image__img_drawings').height() + $('.b-image__img_wood').height() + windowH/4 - 250 ,  
            'top': 'auto',
            'bottom': 250
        });
        $('.b-scroll-indicate_first').css({
            'height': windowH/2 ,
            'top': (-windowH/4)-10
        });*/
        if (windowW < 840) {
            $('.container').css('height', '100%');
		}/*
            $('.b-scroll-indicate_second').css({
                'height': $('.b-images-container').height(),
                'bottom': 150
            });
        }
        if (windowH < 860) {
            $('.b-scroll-indicate_first').css({
                'height': windowH/2 -40,
                'top': (-windowH/4)-10 +40
            });
        }
        if (windowH < 700) {
            $('.b-scroll-indicate_first').css({
                'height': windowH/2 -60,
                'top': (-windowH/4)-10 +60
            });
        }

        if (windowH < 580) {
            $('.b-scroll-indicate_first').css({
                'height': windowH/2 -90,
                'top': (-windowH/4)-10 +90
            });
        }
        $('.b-page_5 .b-text-block').css('top', windowH/2 - $('.b-page_5 .b-text-block').innerHeight()/2); */
        $('.main').height(inertiaWrapper.height());
	};
	
    updateParallax = function() {
        var scrollDiff;
    
        inertiaScrollTop += 0.05 * (scrollTop - inertiaScrollTop);
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
    
        items.each(function( indx ) {
            var offsetX = 0,
                speed = $(this).data('speed'),
                movementSpeed = $(this).data('movement-speed'),
                height = $(this).data('height'),
                offsetTop = $(this).data("offset-top"),
                mouseOffsetX = $(this).data("mouse-offset-x"),
                mouseOffsetY = $(this).data("mouse-offset-y"),
                offsetY = $(this).data("offset-y"),
                side = $(this).data("side"),
                waypointOffset,
                waypointOffsetX = 0,
                waypointOffsetY = 0,
                newOffsetY = inertiaScrollTop + windowH/2 - height/2 - offsetTop;

            offsetY = -1 * newOffsetY * speed/20;

            // mouse movement
            height = movementSpeed * 10/ windowH;
            width = movementSpeed * 10 / windowW;
            pageX = mouseX - (windowW / 2);
            pageY = mouseY - (windowH / 2);
    
            var newOffsetX = width * pageX * -1;
            newOffsetY = height * pageY * -1;
            mouseOffsetX += (newOffsetX - mouseOffsetX)/ 20;
            mouseOffsetY += (newOffsetY - mouseOffsetY)/ 20;
			
			
            //gallery waypoints
            if (side) {
                waypointOffset = -1 * (offsetTop + offsetY + mouseOffsetY - inertiaScrollTop) / (windowH / 2 - $(this).height()/2);
				$(this).data('waypoint',offsetY);
                if (waypointOffset < 0) waypointOffset = 0;
                if (waypointOffset > 1) waypointOffset = 1;
                if (side === 'right') waypointOffsetX = (windowW/2 + 500) * waypointOffset;
                if (side === 'left') waypointOffsetX = -((windowW/2 + 500) * waypointOffset);
            }

            offsetX = mouseOffsetX + waypointOffsetX;
            offsetY = offsetY + mouseOffsetY + waypointOffsetY;
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
		});
    };

    initQueryLoader = function() {
		if ($('img').length) {
			$("body").queryLoader2({
				backgroundColor: '#fff',
				barColor: '#333',
				barHeight: 6,
				onComplete: function() {
					/* $scrollTop = inertiaWrapper.height() - windowH; */
					window.scrollTo(0, 0);
					$('#wrap').addClass('visible');
					mouseWheel = true;
				}
        	});
		} else {
			$('#wrap').addClass('visible');
		}
    }
	
    preparePage = function() {
        if (!Modernizr.csstransforms3d) {
            $('.movement').css('position', 'absolute');
        }
		/*
        $('.b-page').css('height', windowH);
        $scrollTop = inertiaWrapper.height() - windowH;
        window.scrollTo(0, $scrollTop);
		*/
    };

    draw = function() {
        if (windowW > 820) {
            updateParallax();
        }
        requestAnimFrame( draw );
    } 

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
	
	init = function() {
        $('body').on('mousemove', function(e) {
            mouseX = e.screenX;
            mouseY = e.screenY;
        });
		$(window).on('resize', function() {
            resizeParallax();
            /*if ( windowW < 768)  $('.b-page').css('height', windowH);*/
        });
		container.on('scroll', function() {
            scrollTop = container.scrollTop();
            
        });
		$('body').on('mousewheel', function(e) {
            if (!mouseWheel) {
                e.preventDefault();
            }
        });
		
		isTouchDevice = isTouchDevice();
		preparePage();
        buildParallax();
		initQueryLoader();
		
		$('.navigation__menu, .navigation__close').on('click', function() {
			$('body').toggleClass('locked');
			$('.logo__mobile').toggleClass('open');
			$('.navigation').toggleClass('open');
		});
		
		$('.navigation a').hover(function() {
			$('.navigation a').not(this).toggleClass('light');
		});
		
		$('.footer__up').on('click', function() {
			$('html, body').animate({'scrollTop': 0}, 1000);
			return false; // no JS fallback uses anchors
		});
	};
	
	init();