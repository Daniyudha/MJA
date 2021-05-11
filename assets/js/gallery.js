//   ===== Owl Carousel ===== //
$('.owl-carousel').owlCarousel({
	center: true,
	loop: true,
	nav: false,
	items: 4,
	responsive:{
	  0:{
		items: 1.9,
	  },
	  768:{
		items: 3.6,
	  },
	  990:{
		items: 4.3,
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
