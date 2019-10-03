window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let calc = require('./parts/calc.js'),
        tabs = require('./parts/tabs.js'),
        form = require('./parts/form.js'),
        timer = require('./parts/timer.js'),
        slider = require('./parts/slider.js'),
        modal = require('./parts/modal.js');

    calc();
    tabs();
    form();
    timer();
    slider();
    modal();
});

// import tabs from './modules/tabs'; -ES6 (вынести из обработчика в начало)
