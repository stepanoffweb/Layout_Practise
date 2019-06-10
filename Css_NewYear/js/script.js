var object1 = $('.hat');
var object2 = $('.face');
var layer = $('body');

layer.mousemove(function (e) {
    var valueX = (e.pageX * -1 / 45 );
    var valueY = (e.pageY * -1 / 55 );

    object1.css({
        'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) '
    });
    object2.css({
        'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0) '
    });
});

var card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});
