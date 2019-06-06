$(window).load(function () {
            $('.before-after').twentytwenty({
                 before_label: 'до применения', // Set a custom before label
                 after_label: 'после применения', // Set a custom after label
            });
            $('.before-slider').slick({
                draggable: false,
                dots: true,
                prevArrow: $('.arrow__left'),
                nextArrow: $('.arrow__right'),
                dotsClass: 'before-slider__dots',
            });
            $('.menu-button').on('click', function() {
                $('.menu').toggleClass('menu__active');
            });

            // select tuning. Small trick with the hoisting: <select> is a common parent for both input and option, so we don't need a separate function to close options after choice is made.
            $('.select').on('click', function(){
                $('.select__dropdown').toggleClass('select__dropdown_open');
            });
            $('.select__option').on('click', function() {
                let value = $(this).attr('data-value');
                $('#select-type').val(value);
                $('.select_checked').text(value);
            });
            $("a[href^='#']").on('click', function(){
                let _href = $(this).attr('href');
                $("html, body").animate({ scrollTop: $(_href).offset().top -120 + 'px'});
                return false;
            });
            // Masked Input plugin for jQuery
            $('[type="tel"]').mask("+7 (999) 999-99-99");

        });



