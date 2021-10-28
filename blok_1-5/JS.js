

(function() {

    'use strict';


    const breakpoint = window.matchMedia( '(min-width:330px)' );


    let mySwiper;

    const breakpointChecker = function() {


        if ( breakpoint.matches === true ) {


            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );


            return;


        } else if ( breakpoint.matches === false ) {


            return enableSwiper();

        }

    };



    const enableSwiper = function() {

        mySwiper = new Swiper ('.swiper', {

            slidesPerView: 1.2,
            spaceBetween: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });

    };


    breakpoint.addListener(breakpointChecker);


    breakpointChecker();



})();

var showBott = document.querySelector('.show__buttom');
var list = document.querySelectorAll('.slide__show');
var listMax = document.querySelectorAll('.slide__show-bot')
var pict = document.querySelector('.buttom__image');
var pc1 = 'assets/image/icon.svg';
var pc2 = 'assets/image/icon-up.svg'

showBott.addEventListener('click', function (evt){

    for (var i = 0; i < list.length; i++){
        list[i].classList.toggle('slide__show');
    }

    for (var i = 0; i < listMax.length; i++){
        listMax[i].classList.toggle('slide__show-bot');
    }
    if(showBott.innerHTML === 'Скрыть'){
        showBott.innerHTML = 'Показать все';
        pict.src = pc1;
    } else {
        showBott.innerHTML = 'Скрыть'
        pict.src = pc2;
    }

});


