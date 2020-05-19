$(function() {
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
        asNavFor: '.header__slider',
        responsive: [{
            breakpoint: 961,
            settings: 'unslick'
        }, ]
    });
    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
    });
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesTOScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="previous item">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="next item">',
        asNavFor: '.slider-map',
        responsive: [{
            breakpoint: 1210,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        }, ]
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesTOScroll: 1,
        asNavFor: '.surf-slider',
        arrows: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1103,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        }, ]
    });
    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesTOScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="previous item">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="next item">'
    });
    // input number script
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $('.quantity-button').on('click', function() {
        let sum = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests');
        $(".sum").html('$' + sum);
    });
    $(".surfboard-box__circle").on('click', function() {
        $(this).toggleClass('active');
    });
});
