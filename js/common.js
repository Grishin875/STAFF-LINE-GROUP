$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});

$('.nav_rev > div').click(function(){
	const  revID = $(this).data('revid')
	$('.nav_rev > div').not(this).removeClass('active')
	$(this).addClass('active')

	$('.item_rev ').not(revID).removeClass('active')
	$(revID).addClass('active')
})

$('a.yakor').on('click', function (event){
	var $anchor = $(this)
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top - 57
	},{
		duration: 2000,
		specialEasing:{
			with: "linear",
			height: 'easeInOutCubic'
		}
	})
	event.preventDefault()
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	speed: 400,
  spaceBetween: 10,
	slidesPerView: "1",

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});