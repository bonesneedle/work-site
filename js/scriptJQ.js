$(document).ready(function () {
	$('.question-customer-help__ask').click(function (e) {
		$('.question-customer-help__ask').not($(this)).removeClass('active-spoiler');
		$('.question-customer-help__ask').not($(this)).next().slideUp(450);
		$(this).toggleClass('active-spoiler');
		$(this).next().slideToggle(450);
	});
});