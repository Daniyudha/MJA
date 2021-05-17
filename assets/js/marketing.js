//   ===== Owl Carousel ===== //
$('.owl-carousel').owlCarousel({
    center: true,
	loop: true,
	nav: true,
	items: 1,
	navText: ['<i class="legalitas-nav legalitas-prev fas fa-chevron-left"></i>','<i class="legalitas-nav legalitas-next fas fa-chevron-right"></i>'],
	responsive:{
	  0:{
		items: 1,
	  },
	  768:{
		items: 1,
	  },
	  990:{
		items: 1.4,
	  }
	},
	onInitialized: coverFlowEfx,
	onTranslate: coverFlowEfx,
  });
  
  function coverFlowEfx(e){
	if ($('.owl-dots')) {
	  $('.owl-dots').remove();
	}
	idx = e.item.index;
	$('.owl-item.big').removeClass('big');
	$('.owl-item.medium').removeClass('medium');
	$('.owl-item.mdright').removeClass('mdright');
	$('.owl-item.mdleft').removeClass('mdleft');
	$('.owl-item.smallRight').removeClass('smallRight');
	$('.owl-item.smallLeft').removeClass('smallLeft');
	$('.owl-item').eq(idx -1).addClass('medium mdleft');
	$('.owl-item').eq(idx).addClass('big');
	$('.owl-item').eq(idx + 1).addClass('medium mdright');
	$('.owl-item').eq(idx + 2).addClass('smallRight');
	$('.owl-item').eq(idx - 2).addClass('smallLeft');
  }
  
  $('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	asNavFor: '.slider-nav-thumbnails',
});

$('.slider-nav-thumbnails').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider',
	dots: true,
	focusOnSelect: true
});

// Remove active class from all thumbnail slides
$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

// Set active class to first thumbnail slides
$('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	var mySlideNumber = nextSlide;
	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});