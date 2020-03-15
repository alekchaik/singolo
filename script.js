const slider = document.querySelector('.slider__phones');
const arrows = document.querySelectorAll('.arrow img');
const root = document.documentElement;

let isFirstActive = true;
function slidePhones(el) {
    const translation = (el.target.id == 'left') ? -1000 : 1000;
    arrows[0].classList.toggle('disabled');
    arrows[1].classList.toggle('disabled');
    if (isFirstActive) {
        root.style.setProperty('--slide-previous',`${-translation}px`);
        setTimeout(() => {
            slider.classList.toggle('transition');
            root.style.setProperty('--slide-first', `${translation}px`)
            root.style.setProperty('--slide-previous', `0px`);
            setTimeout(() => {
                arrows[0].classList.toggle('disabled');
                arrows[1].classList.toggle('disabled');
                slider.classList.toggle('transition')
            }, 1000);
        },0);
    } else {
        root.style.setProperty('--slide-first', `${-translation}px`)
        setTimeout(() => {
            slider.classList.toggle('transition');
            root.style.setProperty('--slide-first', `0px`)
            root.style.setProperty('--slide-previous', `${translation}px`);
            setTimeout(() => {
                arrows[0].classList.toggle('disabled');
                arrows[1].classList.toggle('disabled');
                slider.classList.toggle('transition')
            }, 1000);
        },0);
    }
    isFirstActive = !isFirstActive;

}

arrows[0].addEventListener('click',slidePhones);
arrows[1].addEventListener('click', slidePhones)