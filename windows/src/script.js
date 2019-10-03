// TIMER
let deadline = '2019-12-29',
	// calculates time to the end and return the object with separated values of time units
    getTimeRemain = (endtime) => {
        let now = Date.now(),
            d = Date.parse(endtime) - now,
            seconds = Math.floor((d / 1000) % 60),
            minutes = Math.floor((d / 1000 / 60) % 60),
            hours = Math.floor(d / (1000 * 60 * 60) % 24) + (new Date().getTimezoneOffset() / 60);
        days = Math.floor(d / (1000 * 60 * 60 * 24));

        return {
            'total': d,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    },
    // output results on the page
    print = (unit, field1, field2, field3) => {
        unit = ''+unit;
        if(unit.length < 2 && field3) {
            field1.textContent = '0';
            field2.textContent = '0';
            field3.textContent = unit;
        } else if(unit.length < 3 && field3) {
        	field1.textContent = '0';
            field2.textContent = unit[0];
            field3.textContent = unit[1];
        } else if (unit.length < 2) {
            field1.textContent = '0';
            field2.textContent = unit;
        } else {
        	field1.textContent = unit[0];
            field2.textContent = unit[1];
        }
    },
    // main function
    setClock = (endtime) => {
        let timer = document.querySelectorAll('.unit'),
            days1 = timer[0],
            days2 = timer[1],
            days3 = timer[2],
            hours1 = timer[3],
            hours2 = timer[4],
            minutes1 = timer[5],
            minutes2 = timer[6],
            seconds1 = timer[7],
            seconds2 = timer[8];

        function updateClock() {
            let t = getTimeRemain(endtime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                timer.forEach(function (e) {
                    e.textContent = '0';
                });
            } else {
                print(t.days, days1, days2, days3);
                print(t.hours, hours1, hours2);
                print(t.minutes, minutes1, minutes2);
                print(t.seconds, seconds1, seconds2);
            }
        }
        setInterval(updateClock, 1000);
    };

setClock(deadline);

// POPUP MODAL
let callbackBtn = document.querySelectorAll('.phone_link'),
    callbackWindow = document.querySelector('.popup');

callbackBtn.forEach(function (el) {
    el.addEventListener('click', function () {
        event.preventDefault();
        callbackWindow.style.display = 'block';
    });
});

winClose = (block) => {
    block.addEventListener('click', function (event) {
        target = event.target;
        while (target != this) {
            if (target.className == 'popup_form') {
                return;
            }
            target = target.parentNode;
        }
        this.style.display = 'none';
    });
}
winClose(callbackWindow);

// POPUP TIMEOUT
window.onload = function () {
    setTimeout(function () {
        callbackWindow.style.display = 'block';
    }, 60000);
};

// POPUP_ENGINEER
let engineerBtn = document.querySelector('.popup_engineer_btn'),
    engineerWindow = document.querySelector('.popup_engineer');

engineerBtn.addEventListener('click', function () {
    engineerWindow.style.display = 'block';
});

winClose(engineerWindow);

// POPUP IMGs (our_works)
let imgs = document.querySelector("#our_works"),
    body = document.querySelector('body');

imgs.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;

    while (target != this) {
        if (target && target.tagName == 'A') {
            let imgBig = document.createElement('img'),
                imgDiv = document.createElement('div');
            imgBigPath = target.href;
            imgBig.src = imgBigPath;
            imgBig.style.cssText = "display: block; margin: auto; height: 70vh; box-sizing: content-box;";
            imgDiv.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99; background-color: rgba(0, 0, 0, 0.5);padding-top: 50px;";
            imgDiv.id = 'newDiv';
            body.appendChild(imgDiv);
            imgDiv.appendChild(imgBig);
            break;
        } else {
            target = target.parentNode;
        }
    }

    let newDiv = document.querySelector('#newDiv');
    newDiv.addEventListener('click', function (event) {
        let target = event.target;
        if (target.tagName != 'IMG') {
            this.remove();
        }
    });
});

// TABS WINDOWS
let tabsBlock = document.querySelector('.glazing_slider'),
    tabs = document.querySelectorAll('.glazing_slider .glazing_block'),
	tabContent = document.querySelectorAll('.glazing .row');

let hideTabs = () => {
    tabContent.forEach(function (e) {
        e.style.display = 'none';
    });
    tabs.forEach(function (el) {
		el = el.querySelector('a');
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
};
hideTabs();
tabContent[0].style.display = 'block';
tabs[0].querySelector('a').classList.add('active');

let showTabContent = (b, tab) => {
    tabContent[b].style.display = 'block';
    tab.classList.add('active');
};

tabsBlock.addEventListener('click', function (event) {
    event.preventDefault();
	let target = event.target;
	while (target != this) {
		if (target && target.classList.contains('glazing_block')) {
			for (let i = 0; i < tabs.length; i++) {
				if (target == tabs[i]) {
					hideTabs();
					showTabContent(i, target.querySelector('a'));
					break;
				}
			}
		}
		target = target.parentNode;
	}
});
// TABS DECORATION
let tabsBlock2 = document.querySelector('.decoration_slider'),
    tabs2 = document.querySelectorAll('.decoration_slider a'),
    tabContent2 = document.querySelectorAll('.decoration_content .internal, .external, .rising, .roof');

let hideTabs2 = () => {
    tabContent2.forEach(function (e) {
        e.style.display = 'none';
    });
    tabs2.forEach(function (el) {
        if (el.parentNode.classList.contains('after_click')) {
            el.parentNode.classList.remove('after_click');
        }
    })
};
hideTabs2();
tabContent2[1].style.display = 'block';
tabs2[0].parentNode.classList.add('after_click');

let showTabContent2 = (b, tab) => {
    tabContent2[b].style.display = 'block';
    tab.parentNode.classList.add('after_click');
};

tabsBlock2.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (target && target.tagName == 'A') {
        for (let i = 0; i < tabs2.length; i++) {
            if (target == tabs2[i]) {
                hideTabs2();
                showTabContent2(i, target);
                break;
            }
        }
    }
});
// CALCULATOR
// 1-е ОКНО (popup_calc)
let calcBtnsBlock = document.querySelector('section.glazing'),
    calcWindow = document.querySelector('div.popup_calc'),
    balkBtnsBlock = document.querySelector('div.balcon_icons'),
    balkImgs = document.querySelectorAll('div.big_img img'),
    balkBtns = document.querySelectorAll('div.balcon_icons a'),
    passBtn = document.querySelector('.popup_calc_button'),
    total = {};

// открываем и закрываем окно
calcBtnsBlock.addEventListener('click', function (event) {
    target = event.target;
    if (target.classList.contains('popup_calc_btn')) {
        calcWindow.style.display = 'block';
        w.value = '';
        h.value = '';
        hideImgs();
        balkImgs[0].style.display = 'block';
        balkBtns[0].querySelector('img').style.width = '35%';
        balkBtns[0].querySelector('img').classList.add('active');
    }
});

calcWinClose = (block) => {
    block.addEventListener('click', function (event) {
        target = event.target;
        while (target != this) {
            if (target.classList.contains('popup_calc_close')) {
				this.style.display = 'none';
				this.querySelectorAll('input').forEach(function(e) {
					e.value = '';
				});
                total = {};
                return;
            }
            target = target.parentNode;
        }
    });
}
calcWinClose(calcWindow);
// фильтр ввода калькулятора "только цифры"
let w = calcWindow.querySelector('#width'),
    h = calcWindow.querySelector('#height');

function onlyNum(elem) {
    elem.addEventListener('keyup', function () {
        elem.value = elem.value.replace(/[^\d]/g, '');
    });
}
onlyNum(h);
onlyNum(w);

calcWindow.addEventListener('change', (e) => {
    if (e.target && e.target == w) {
        total.width = w.value;
    }
    if (e.target && e.target == h) {
        total.height = h.value;
    }
});
// обрабатываем эскизы оконных рам и связываем их с большими изображ.
let hideImgs = () => {
    balkImgs.forEach(function (e) {
        e.style.display = 'none';
    });
    balkBtns.forEach(function (el) {
        el.querySelector('img').style.width = '20%';
        if (el.querySelector('img').classList.contains('active')) {
            el.querySelector('img').classList.remove('active');
        }
    });
};

let showBigImg = (b, tab) => {
    balkImgs[b].style.display = 'block';
    tab.querySelector('img').style.width = '35%';
    tab.querySelector('img').classList.add('active');
};

balkBtnsBlock.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;
    while (target != this) {
        if (target && target.tagName == 'A') {
            for (let i = 0; i < balkBtns.length; i++) {
                if (target == balkBtns[i]) {
                    hideImgs();
                    showBigImg(i, target);
                    break;
                }
            }
        }
        target = target.parentNode;
    }
});

// переходим в окно popup_calc_profile
let btnPass = document.querySelector('.popup_calc_button'),
    calcWindow2 = document.querySelector('.popup_calc_profile'),
    checkers = calcWindow2.querySelectorAll('input'),
    coldCheck = document.querySelector('#cold'),
    warmCheck = document.querySelector('#warm');

// закрываем первое окно, записывая в объект выбранную (активную) форму балкона
btnPass.addEventListener('click', function () {
    if (h.value != '' && w.value != '' && h.value != '0' && w.value != '0') {
        balkBtns.forEach(function (item, index) {
            img = item.querySelector('img');
            if (img.classList.contains('active')) {
                total.typeFrame = 'type ' + (index + 1);
            }
        });
        checkers[0].checked = false;
        checkers[1].checked = true;
        total.kind = 'warm';
        calcWindow2.style.display = 'block';
        calcWindow.style.display = 'none';
    }
});
// взводим дефолтный чекер и отслеживаем клики, переключая типы теплый\ холодный

calcWindow2.addEventListener('click', (e) => {
    if (e.target && e.target == checkers[0]) {
        checkers[0].checked = true;
        checkers[1].checked = false;
        total.kind = 'cold';
    } else if (e.target && e.target == checkers[1]) {
        checkers[0].checked = false;
        checkers[1].checked = true;
        total.kind = 'warm';
    }
});

calcWin2Close = (block) => {
    block.addEventListener('click', function (event) {
        target = event.target;
        while (target != this) {
            if (target.classList.contains('popup_calc_profile_close')) {
				this.style.display = 'none';
				this.querySelectorAll('input').forEach(function (e) {
					e.value = '';
				});
                total = {};
                return;
            }
            target = target.parentNode;
        }
    });
}
calcWin2Close(calcWindow2);

//переходим в окно popup_calc_end, записав выбранный тип профиля
let btnPass2 = document.querySelector('.popup_calc_profile_button'),
    calcWindow3 = document.querySelector('.popup_calc_end'),
    name = calcWindow3.querySelectorAll('input')[0],
    phone = calcWindow3.querySelectorAll('input')[1];

btnPass2.addEventListener('click', function () {
    total.profyleType = calcWindow2.querySelector('select').value;
    calcWindow3.style.display = 'block';
    calcWindow2.style.display = 'none';
});
// закрытие окна со сбросом данных
calcWin3Close = (block) => {
    block.addEventListener('click', function (event) {
        target = event.target;
        while (target != this) {
            if (target.classList.contains('popup_calc_end_close')) {
				this.style.display = 'none';
				this.querySelectorAll('input').forEach(function (e) {
					e.value = '';
				});
                total = {};
                return;
            }
            target = target.parentNode;
        }
    });
}
// сохранение введенных данных
calcWin3Close(calcWindow3);
calcWindow3.addEventListener('change', (e) => {
    if (e.target && e.target == name) {
        total.user_name = name.value;
    }
    if (e.target && e.target == phone) {
        total.user_phone = phone.value;
    }
});
// отправка данных по нажатию на "далее" если оба поля заполнены
// FORMs
let forms = document.body.querySelectorAll('.form'),
    allInputs = document.body.querySelectorAll('input'),
    inputs = [],
    submitBtn = document.body.querySelector('.popup_calc_end button[type="submit"]');
allInputs.forEach(function (elem) {
    if (!elem.classList.contains('checkbox') && elem.id != 'width' && elem.id != 'height') {
        inputs.push(elem);
    }
});
// submitBtn.addEventListener('click', function() {
//     total = total;
// })

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};
let statusMessage = document.createElement('div');
statusMessage.cssText = 'height: 30px; width: 80px; background: rgba(0, 0, 0, .7); border: #FF6C32 solid 1px; border-radius: 5px;';

// ввод только цифр в поле тлф
function numbers() {
    let body = document.getElementsByTagName('body');
    body[0].addEventListener('keyup', function (e) {
        let target = e.target;
        if (target && target.getAttribute('name') == 'user_phone' && target.tagName == 'INPUT') {
            target.value = target.value.replace(/[^+/\d/]/g, '');
        }
    });
}
numbers();

function sendMessage() {
    document.body.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData;
        for (let i = 0; i < forms.length; i++) {
            let form = forms[i];
            if (event.target == form) {
                form.appendChild(statusMessage);
                formData = new FormData(form);

                function postData() {
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
						request.setRequestHeader('Content-Type', 'application/json');

						let sendFormData = {};
						sendFormData = total;
						ins = form.querySelectorAll('input');
						inputs.forEach(function (ins) {
							sendFormData[ins.name] = ins.value;
						});


						let data = JSON.stringify(sendFormData);

						console.log(data);
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
                    for (let i = 0; i < inputs.length; i++) {
						inputs[i].value = '';
						total = {};
                    }
                }
                break;
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });
}
sendMessage();

new WOW().init();
