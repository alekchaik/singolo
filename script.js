const header = document.querySelector('.header');
const menu = document.querySelectorAll('.navigation li a');
function toggleState(event) {
    menu.forEach(el => el.removeAttribute('id'));
    event.target.id = "navigation_selected";
    console.log(event.target.classList[0] != 'home')
    if (event.target.classList[0] != "home")
        header.style.display = 'none';
}
window.addEventListener('mousewheel', (event) => {
    header.style.display = 'inherit';
})
menu.forEach(el => el.addEventListener('click', toggleState))

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

const phones = document.querySelectorAll('.first_slide > div div');
function togglePhone(event) {
    event.target.parentNode.parentNode.classList.toggle('off')
}
phones.forEach(el => el.addEventListener('click', togglePhone))
// verticalPhone.addEventListener('click',()=> console.log('123'))