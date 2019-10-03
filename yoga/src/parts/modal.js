function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        clouse = document.querySelector('.popup-close'),
        infoBlocks = document.querySelector('.info'),
        winOpen = () => {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        },
        winClose = () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        };

    more.addEventListener('click', winOpen);
    clouse.addEventListener('click', winClose);
    infoBlocks.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            winOpen();
        }
    });
}
module.exports = modal;
