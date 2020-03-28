const header = document.querySelector('.header');
const menu = document.querySelectorAll('.navigation li a');
const sections = [];
document.querySelectorAll('.wrapper').forEach(el => sections.push(el.getBoundingClientRect()));
sections.pop();
function toggleMenuState(event) {
    document.querySelector('#navigation_selected').removeAttribute('id');
    event.target.id = 'navigation_selected';
    if (!navigation.classList.contains('active_navigation')) {
        document.querySelector('.logo_url').classList.toggle('active_logo');
        burger.classList.toggle('active_menu');
        navigation.classList.toggle('active_navigation');
        setTimeout(()=> navigation.style.display = 'none', 500)
    }
}
window.addEventListener('mousewheel', (event) => { 
    for (let i = 0; i < sections.length; i++)
        if (sections[i].bottom >= -document.body.getBoundingClientRect().top)
        {
            document.querySelector('#navigation_selected').removeAttribute('id');
            menu[i].id = 'navigation_selected';

            break;
        };
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
    document.querySelector('#slider').classList.toggle('second');
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
    modalWindow.style.zIndex = '20';
    modalWindow.classList.toggle('off');
}
windBtn.addEventListener('click',() => {

    console.log('asd');
    modalWindow.classList.toggle('off');
    setTimeout(()=> modalWindow.style.zIndex = '-1', 1000);
});
form.addEventListener('submit', renderForm);
const navigation = document.querySelector('.header__navigation');

const burger = document.querySelector('#burger_menu');
function menuRender(event) {
    burger.style.pointerEvents = 'none';
    document.querySelector('.logo_url').classList.toggle('active_logo');
    burger.classList.toggle('active_menu');
    if (navigation.classList.contains('active_navigation')) {
        navigation.style.display = 'block';
       setTimeout(()=>navigation.classList.toggle('active_navigation'),0); 
        
    } else {
        navigation.classList.toggle('active_navigation');
        setTimeout(()=> navigation.style.display = 'none', 500)
    }
    setTimeout(() => burger.style.pointerEvents = 'auto', 700)
}
burger.addEventListener('click', menuRender);