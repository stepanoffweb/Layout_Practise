$(function() {

	$('#my-menu').mmenu({
        extentions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
        navbar: {
            title: '<img srsc="img/logo-1.svg" alt="Салон красоты Митлер">'
        }
    });

    var api = $("#my-menu").data( "mmenu" );

    api.bind('open:start', function(){
        $('.hamburger').addClass('is-active');
    });
});
