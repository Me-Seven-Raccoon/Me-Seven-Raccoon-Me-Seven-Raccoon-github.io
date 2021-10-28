/*
const swiper = new Swiper('.swiper', {


    // If we need pagination
    slidesPerView: 1.2,
    spaceBetween: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

*/


(function() {

    'use strict';

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:330px)' );

    // keep track of swiper instances to destroy later
    let mySwiper;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const breakpointChecker = function() {

        // if larger viewport and multi-row layout needed
        if ( breakpoint.matches === true ) {

            // clean up old instances and inline styles when available
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

            // or/and do nothing
            return;

            // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

            // fire small viewport version of swiper
            return enableSwiper();

        }

    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();

//    https://medium.com/@networkaaron/swiper-how-to-destroy-swiper-on-min-width-breakpoints-a947491ddec8

})(); /* IIFE end */

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


