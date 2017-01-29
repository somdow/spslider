	$(document).ready(function(){
		/////////////////////////////////////// APP VARS ///
		var speed = 500;          // Slider fade speed
		var autoSwitch = true;    // Autostart the on page/website load (true or false)
		var autoSwitchSpeed = 3000 // Auto slider speed
		var setFlow  = null;
		

		/////////////////////////////////////// SET INITIAL SLIDER STATES (ON OR OFF ETC) ///
		// Add initial active class
		$('.sp-slide').first().addClass('active');

		// Hide all non active slides
		$('.sp-slide').hide();

		// Show first slide
		$('.active').show();


		/////////////////////////////////////// APP FUNCTIONS ///
		function nextSpSlide(){
			$('.active').removeClass('active').addClass('oldActive');

			if( $('.oldActive').is(':last-child')){
				$('.sp-slide').first().addClass('active');
			} else {
				$('.oldActive').next().addClass('active');
			}

			$('.oldActive').removeClass('oldActive');
			$('.sp-slide').fadeOut(speed); // Hide all the slides
			$('.active').fadeIn(speed); // Show only the active slide
		}

		function prevSpSlide(){
			$('.active').removeClass('active').addClass('oldActive');

			if( $('.oldActive').is(':first-child')){
				$('.sp-slide').last().addClass('active');
			} else {
				$('.oldActive').prev().addClass('active');
			}

			$('.oldActive').removeClass('oldActive');
			$('.sp-slide').fadeOut(speed); // Hide all the slides
			$('.active').fadeIn(speed); // Show only the active slide
		}


		/////////////////////////////////////// BUTTON AND EVENT HANDLERS ///
		//next button on click actions
		$('.next-spSlide').on("click", function(e){
			e.preventDefault();
			nextSpSlide();
		});

		
		//next button on click actions
		$('.prev-spSlide').on("click", function(e){
			e.preventDefault();
			prevSpSlide();
		});

		//AUTOSWITCH the slider function on load

		if(autoSwitch == true){
			setFlow = setInterval( nextSpSlide, autoSwitchSpeed);

			$('.spSliderW').hover(function(){
				window.clearInterval(setFlow);
			}, function(){
				setFlow = setInterval( nextSpSlide, autoSwitchSpeed);
			});

		}

	});