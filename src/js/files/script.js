// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// ZOOM========================================================================================================================================
// const images = document.querySelectorAll('.gallery-image');
// const modal = document.querySelector('.modal');
// const modalImage = document.querySelector('#modal-image');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const closeButton = document.querySelector('.close');

// let currentImageIndex = 0;

// // функция открытия модального окна с картинкой
// function openModal() {
//   modal.style.display = 'block';
// }

// // функция закрытия модального окна
// function closeModal() {
//   modal.style.display = 'none';
// }

// // функция переключения на предыдущую картинку
// function prevImage() {
//   currentImageIndex--;
//   if (currentImageIndex < 0) {
//     currentImageIndex = images.length - 1;
//   }
//   modalImage.src = images[currentImageIndex].src;
// }

// // функция переключения на следующую картинку
// function nextImage() {
//   currentImageIndex++;
//   if (currentImageIndex >= images.length) {
//     currentImageIndex = 0;
//   }
//   modalImage.src = images[currentImageIndex].src;
// }

// // добавляем обработчик клика на каждую картинку
// images.forEach((image, index) => {
//   image.addEventListener('click', () => {
//     currentImageIndex = index;
//     modalImage.src = image.src;
//     openModal();
//   });
// });

// // добавляем обработчики клика на кнопки и крестик
// prevButton.addEventListener('click', prevImage);
// nextButton.addEventListener('click', nextImage);
// closeButton.addEventListener('click', closeModal);

// // добавляем обработчик клавиш клавиатуры
// document.addEventListener('keydown', (event) => {
//   if (modal.style.display === 'block') {
//     if (event.keyCode === 37) { // стрелка влево
//       prevImage();
//     } else if (event.keyCode === 39) { // стрелка вправо
//       nextImage();
//     } else if (event.keyCode === 27) { // кнопка Esc
//       closeModal();
//     }
//   }
// });

// // ======================================================================================================================================
// // ЧЕКБОКСЫ
// $(document).ready(function() {
  
//   $.each($('.checkbox'), function(index, val) {
//     if($(this).find('input').prop('checked')==true){
//       $(this).addClass('active');
//     }
//   });
//   $(document).on('click', '.checkbox', function(event) {
//     if($(this).hasClass('active')){
//       $(this).find('input').prop('checked',false);
//     }else{
//       $(this).find('input').prop('checked',true);
//     }
//     $(this).toggleClass('active');
    
//     return false;
//   });

//   //RADIO
//   $.each($('.radiobuttons__item'), function(index, val) {
//     if($(this).find('input').prop('checked')==true){
//       $(this).addClass('active');
//     }
//   });
//   $(document).on('click', '.radiobuttons__item', function(event) {
//     $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
//     $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked',false);
//     $(this).toggleClass('active');
//     $(this).find('input').prop('checked',true);
//     return false;
//   });
// });

// // ПАРАЛЛАКС ЭФФЕКТ==============================================================
// $(document).ready(function() {
//   $(window).scroll(function(event) {
//       var s=$(this).scrollTop();
//       var w=$(this).outerWidth();
//       var h=$('.content').outerHeight();
//       var h_b=$('.parallax').outerHeight();
//       var p = s/h*100;
//       var p_b = s/h_b*100;
//       var o = 1-1/100*p_b;

//       var z_1=1+(w/10000*p_b);
//     $('.parallax__fog').css('transform','scale('+z_1+')');
//     $('.parallax__fog').css('opacity',o);

//       var z_2=1+(w/5000000*p);
//     $('.parallax__montain_1').css('transform','scale('+z_2+')');

//       var hr=w/2000*p_b;
//       var z_3=1+(w*0.000005*p_b);
//     $('.parallax__montain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');

//       var hr_2=w/1500*p_b;
//       var z_4=1+(w*0.00001*p_b);
//     $('.parallax__montain_3').css('transform','translate3d('+hr_2+'px,0,0) scale('+z_4+')');
//   });
// });

// IBG================================================================================
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

// BURGER================================================================================
$(document).ready(function() {
  $('.menu__icon').click(function(event) {
    $('.menu__icon,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  });
});