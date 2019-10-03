function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    let modalForm = document.querySelector('.main-form'),
        modalInput = modalForm.getElementsByTagName('input'),
        contactForm = document.querySelector('.contact-form form'),
        contactFormInput = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function numbers() {
        let body = document.getElementsByTagName('body');
        body[0].addEventListener('keyup', function (e) {
            let target = e.target;
            if (target && target.classList.contains('phone') && target.tagName == 'INPUT') {
                target.value = target.value.replace(/[^+/\d/]/g, '');
            }
        });
    }
    numbers();

    function sendMessage(form, input) {
        let formName = form,
            formInput = input;
        formName.addEventListener('submit', function (event) {
            event.preventDefault();
            formName.appendChild(statusMessage);
            let formData = new FormData(formName);

            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    let sendFormData = {};

                    formData.forEach(function (value, key) {
                        sendFormData[key] = value;
                    });

                    let data = JSON.stringify(sendFormData);
                    request.send(data);
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }

            function clearInput() {
                for (let i = 0; i < formInput.length; i++) {
                    formInput[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }
    sendMessage(modalForm, modalInput);
    sendMessage(contactForm, contactFormInput);
}
module.exports = form;
