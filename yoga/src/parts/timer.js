function timer() {
    let deadline = '2019-12-01',

        getTimeRemain = (endtime) => {
            let now = new Date(),
                d = Date.parse(endtime) - Date.parse(now),
                seconds = Math.floor((d / 1000) % 60),
                minutes = Math.floor((d / 1000 / 60) % 60),
                hours = Math.floor(d / (1000 * 60 * 60)) + now.getTimezoneOffset() / 60;

            return {
                'total': d,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

    let print = (unit, field) => {
        if (unit < 10) {
            field.textContent = '';
            field.textContent = '0' + unit;
        } else {
            field.textContent = '';
            field.textContent = unit;
        }
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemain(endtime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else {
                print(t.hours, hours);
                print(t.minutes, minutes);
                print(t.seconds, seconds);
            }
        }
    };

    setClock('timer', deadline);
}
module.exports = timer;


//  export default timer; - ES6
