$(document).ready(function () {
	$('.navbar .dropdown').hover(function () {
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
		}, function () {
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
		});
	});


// ===== NAVBAR ===== //
$(window).scroll(function() {
  
	let position    =   $(this).scrollTop();
	  if (position >= 100) {
		$('.nav-menu').addClass('costum-navbar');
	  } else {
		$('.nav-menu').removeClass('costum-navbar');
	  }
	
  });
  
  
  // ===== HAMBURGER BUTTON ===== //
  $(document).ready(function() {
	
	$('.nav-button').click(function() {
	  $('.nav-button').toggleClass('change');
	})
	  
  });


  
  wow = new WOW();
  
  wow.init();