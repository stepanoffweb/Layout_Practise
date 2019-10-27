$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="previous item">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="next item">',
        asNavFor: '.slider-dotshead'
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesTOScroll: 4,
        asNavFor: '.header__slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesTOScroll: 1,
       prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="previous item">',
       nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="next item">',
       asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesTOScroll: 1,
        asNavFor: '.surf-slider',
        arrows: false,
        focusOnSelect: true
    });
    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesTOScroll: 1,
       prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="previous item">',
       nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="next item">'
    });


});
