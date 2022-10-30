$(document).ready(function(){
	$('.dropdown-toggle').dropdown();

	$('.major_slider__wrapper').slick({
		autoplay: true,
		accessibility: false,
		autoplaySpeed: 7000,
		speed: 1000,
		arrows: false,
		cssEase: 'ease-out',
	});
});