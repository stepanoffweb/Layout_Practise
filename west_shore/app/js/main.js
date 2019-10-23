$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="previous item">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="next item">',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesTOScroll: 4,
        asNavFor: '.header__slider'
    })



});
