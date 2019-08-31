$(function() {

	$('#my-menu').mmenu({
        extensions: ['widescreen', 'pagedim-black', 'theme-black',  'position-right', 'fx-menu-slide'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Митлер">'
        }
    });

    let menu = new Mmenu('#my-menu');
    let api = menu.API;
    console.log("menu ", menu);
    console.log("api ", api);

    api.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    });
  api.bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });

});
