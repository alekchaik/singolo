const header = document.querySelector('.header');
const menu = document.querySelectorAll('.navigation li a');
function toggleMenuState(event) {
    document.querySelector('#navigation_selected').removeAttribute('id');
    event.target.id = 'navigation_selected';
    console.log(event.target.classList[0] != 'home')
    if (event.target.classList[0] != 'home')
        header.style.display = 'none';
}
window.addEventListener('mousewheel', (event) => {
    header.style.display = 'inherit';
})
menu.forEach(el => el.addEventListener('click', toggleMenuState))

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
    event.target.parentNode.parentNode.classList.toggle('off');
}
phones.forEach(el => el.addEventListener('click', togglePhone));

const portfolioButtons = document.querySelectorAll('.portfolio__list li');
const portfolioTabs = document.querySelectorAll('.layout-4-column img');

function randomizeTabs(button) {
    const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12"]
    if (!button)
        items.sort(() => Math.random() -0.5);
    portfolioTabs.forEach((el,i) => el.classList = items[i]);
}

function togglePortfolioState(event) {
    document.querySelector('#portfolio__selected').removeAttribute('id');
    event.target.id = 'portfolio__selected';
    randomizeTabs(event.target.classList[0])
}

function toggleTab(event) {
    if (document.querySelector('#selected_picture'))
        if (event.target.id){
            document.querySelector('#selected_picture').removeAttribute('id');
            return true;
        }
        else
            document.querySelector('#selected_picture').removeAttribute('id');
    event.target.id = 'selected_picture';
}

portfolioTabs.forEach(el => el.addEventListener('click', toggleTab))
portfolioButtons.forEach(el => el.addEventListener('click', togglePortfolioState))

const subBtn = document.querySelector('#submit');
const form = document.querySelector('.quote__form');
const modalWindow = document.querySelector('.modal');
const windBtn = document.querySelector('#container__button');
function renderForm(event) {
    event.preventDefault()
    const subject = document.querySelector('#form_subject').value;
    const description = document.querySelector('#form_description').value;
    document.querySelector('#window_subject').innerHTML = (subject) ? `Тема: ${subject}` : 'Без темы';
    document.querySelector('#window_description').innerHTML = (description) ? `Описание: <br>${description}` : 'Без описания';
    modalWindow.classList.toggle('off');

}
windBtn.addEventListener('click',() => modalWindow.classList.toggle('off'));
form.addEventListener('submit', renderForm);