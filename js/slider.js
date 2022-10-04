$(document).ready(function () {
	//slider productivity>>===============================================================================================================================================================
	$('.productivity__container').slick({
		arrows: false,
		dots: true,

	});
	//<<slider productivity===================================================================================================================================================================
	//slider resources===================================================================================================================================================================
	$('.resources__cards').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: false,
		speed: 600,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					adaptiveHeight: true,
				}
			}
		],
	});
	//custom arrows
	let cards = document.querySelector('.resources__cards');
	let arrows = cards.querySelectorAll('.slick-arrow');
	if (arrows.length > 0) {
		arrows.forEach(element => {
			element.insertAdjacentHTML('afterbegin', `<span></span>`);
		});
	}
	//------------------------
	//<<slider resources===================================================================================================================================================================
	//slider testimonial===================================================================================================================================================================
	$('.testimonials__testimonials').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1.3,
		centerMode: false,
		infinite: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
					adaptiveHeight: false,
				}
			}
		],
	});
	//<<slider testimonial===================================================================================================================================================================

});