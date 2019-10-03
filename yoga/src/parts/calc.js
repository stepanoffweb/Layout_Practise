function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daySum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function checkInput() {
        if (restDays.value == '' || persons.value == '' ||  restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    }

    function totalSum() {
        return (daySum + personsSum) * 4000 * place.options[place.selectedIndex].value;
    }

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = totalSum();
        checkInput();
    });

    restDays.addEventListener('change', function () {
        daySum = +this.value;
        total = totalSum();
        checkInput();
    });

    place.addEventListener('change', function () {
        total = totalSum();
        checkInput();
    });

    function onlyNum(elem) {
        elem.addEventListener('keyup', function () {
            elem.value = elem.value.replace(/[^\d]/g, '');
        });
    }
    onlyNum(restDays);
    onlyNum(persons);
}
module.exports = calc;
