const d = document;
const $linkContainer = d.querySelector('.mode__ul');
const $link = d.querySelectorAll('.mode__li');
const $description = d.querySelectorAll('.description');
const $accordion = d.querySelectorAll('.question');
const $form = d.querySelector('.form');
const $emil = d.querySelector('.form__input');
const $error = d.querySelector('.form__error');
const $message = d.querySelector('.form__message');
const $presentation = d.querySelector('.presentation')
const $header = d.querySelector('.header');
const $logoBlack = d.querySelector('.header__image:last-child');
const $logoWhite = d.querySelector('.header__image:first-child');
const $closed = d.querySelector('.header__img:last-child');
const $hamburger = d.querySelector('.header__img:first-child');
const $toggle = d.querySelector('.header__toggle');
const $nav = d.querySelector('.header__nav');

const regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const tabChange = (tab) => {
    $link.forEach(li => {
        li.classList.remove('mode__li--activ');
    });
    tab.add('mode__li--activ');
}
const tabDescription = (tab) => {
    $description.forEach(description => {
        description.classList.remove('description--activ');
        if (tab === description.id) {
            description.classList.add('description--activ');
        }
    });
}
const validateForm = () => {

    if (regExp.test($emil.value)) {
        $emil.classList.remove('form__input--activ');
        $error.classList.remove('form__error--activ');
        $message.classList.remove('form__message--activ');
    }
    else {
        $emil.classList.add('form__input--activ');
        $error.classList.add('form__error--activ');
        $message.classList.add('form__message--activ');
    }
}
const validateInput = () => {
    $emil.classList.remove('form__input--activ');
    $error.classList.remove('form__error--activ');
    $message.classList.remove('form__message--activ');

    (regExp.test($emil.value))
        ? $emil.classList.remove('form__input--activ')
        : $emil.classList.add('form__input--activ');
}
const menuToggle=()=>{
    $header.classList.toggle('header--activ');
    $presentation.classList.toggle('presentation--activ')
    $nav.classList.toggle('header__nav--activ');
    $logoWhite.classList.toggle('header__image--activ');
    $logoBlack.classList.toggle('header__image--activ');
    $hamburger.classList.toggle('header__img--activ');
    $closed.classList.toggle('header__img--activ');
}

$linkContainer.addEventListener('click', e => {
    tabChange(e.target.classList);
    tabDescription(e.target.id);
});

$accordion.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('question__activ');
    });
});

$emil.addEventListener('keyup', e => {
    validateInput();
});

$form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
    $form.reset();
});

$toggle.addEventListener('click', e => {
    menuToggle();
});