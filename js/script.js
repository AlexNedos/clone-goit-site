$(function () {
	$('.menu__list__dropdown').hover(
		function () {
			$(this).children('.submenu').slideDown(0);
		},
		function () {
			$(this).children('.submenu').slideUp(0);
		}
	);
});