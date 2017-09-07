/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Touch?
			if (skel.vars.mobile)
				$body.addClass('is-touch');

		// Forms.
			var $form = $('form');

			// Auto-resizing textareas.
				$form.find('textarea').each(function() {

					var $this = $(this),
						$wrapper = $('<div class="textarea-wrapper"></div>'),
						$submits = $this.find('input[type="submit"]');

					$this
						.wrap($wrapper)
						.attr('rows', 1)
						.css('overflow', 'hidden')
						.css('resize', 'none')
						.on('keydown', function(event) {

							if (event.keyCode == 13
							&&	event.ctrlKey) {

								event.preventDefault();
								event.stopPropagation();

								$(this).blur();

							}

						})
						.on('blur focus', function() {
							$this.val($.trim($this.val()));
						})
						.on('input blur focus --init', function() {

							$wrapper
								.css('height', $this.height());

							$this
								.css('height', 'auto')
								.css('height', $this.prop('scrollHeight') + 'px');

						})
						.on('keyup', function(event) {

							if (event.keyCode == 9)
								$this
									.select();

						})
						.triggerHandler('--init');

					// Fix.
						if (skel.vars.browser == 'ie'
						||	skel.vars.mobile)
							$this
								.css('max-height', '10em')
								.css('overflow-y', 'auto');

				});

			// Fix: Placeholder polyfill.
				$form.placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Menu.
			var $menu = $('#menu');

			$menu.wrapInner('<div class="inner"></div>');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						if (href == '#menu')
							return;

						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				})
				.append('<a class="close" href="#menu">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

			
		// Banner
			$('#title').fadeIn(1000);
			$('#rec1').animate({width:'50em'},500);
			$('#rec2').delay(500).animate({height:'+=35%'},250);
			$('#rec4').delay(750).animate({marginLeft:'-=50em', width:'50em'},500);
			$('#rec3').delay(1250).animate({height:'+=35%', top:'25%'},250);

			
		// Time Bar
			var timer

			$(window).scroll(function(){

			    window.clearTimeout(timer)

			    timer = window.setTimeout(function() {
		          	console.log('scroll event') 
		          	var t1 = $('#timebar1').position().top;
	        		var t2 = $('#timebar2').position().top;
	        		var t3 = $('#timebar3').position().top;
	        		var t4 = $('#timebar4').position().top;
	        		var t5 = $('#timebar5').position().top;

	        		if ($(window).scrollTop() > t1-200) {
	        			$('#timebar1').css('visibility','visible');
	            		$('#timebar1').animate({height: +(t2-t1-150)}, 'slow');
	        		}

	        		if ($(window).scrollTop() > t2-200) {
	        			$('#timebar2').css('visibility','visible');
	            		$('#timebar2').animate({height: +(t3-t2-150)}, 'slow');
	        		}

	        		if ($(window).scrollTop() > t3-200) {
	        			$('#timebar3').css('visibility','visible');
	            		$('#timebar3').animate({height: +(t4-t3-150)}, 'slow');
	        		}

	        		if ($(window).scrollTop() > t4-200) {
	        			$('#timebar4').css('visibility','visible');
	            		$('#timebar4').animate({height: +(t5-t4-150)}, 'slow');
	        		}

	        		if ($(window).scrollTop() > t5-400) {
	        			$('#timebar5').css('visibility','visible');
	            		$('#timebar5').animate({height:'+40vh'}, 'slow');
	            		$('#timebar5').unbind();
	            		$(window).unbind('scroll');
	        		}
			    }, 100)
			})


	});

})(jQuery);