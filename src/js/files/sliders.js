// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";



// $(document).ready(function ($) {
// 	$('.slider__body').slick();
// });

if($('.slider__body').length>0){
	$('.slider__body').slick({
		dots:true,
		arrows:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings:{}
		}]
	});
	

}