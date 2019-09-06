$(function() {

	$('#my-menu').mmenu({
        extensions: ['widescreen', 'pagedim-black', 'theme-black',  'position-right', 'fx-menu-slide'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Митлер">'
        }
    });

    let menu = new Mmenu('#my-menu');
    let api = menu.API;

    api.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });
// дождемся инициализации плагина с запасом 100мкс перед рассчетом высоты контента (иначе блоки разной высоты)
    $('.carousel-services').on('initialized.owl.carousel', function() {
        setTimeout(function(){
            carouselService();
        }, 100)
    });
    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 700,
        navText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    function carouselService() {
        $('.carousel-services-item').each(function(){
            let ths = $(this),
            thsh = ths.find('.carousel-services-content').outerHeight();
            console.log(thsh)
            ths.find('.carousel-services-img').css('min-height', thsh);
        });
    }
    $('.reviews').owlCarousel({
        loop: true,
        nav: false,
        // dots: true,
        items: 1,
        smartSpeed: 700,
        autoHeights: true
    });

    $('.carousel-services-composition .h3').each(function() {
        let ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
    $('section .h2').each(function() {
        let ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $('select').selectize({
        create: true
    });

    //E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            // alert("Thank you!");
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    function onResize() {
        $('.carousel-services-content').equalHeights();
    }
    // window.onResize(function() {
    // });
    onResize();



});
