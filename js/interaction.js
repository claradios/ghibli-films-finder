'use strict';

function pickCard(film) {
    const description = film.querySelector('.film__description');
    const info = film.querySelector('.film__info');
    const title = film.querySelector('.film__title');
    const btn = film.querySelector('button');
    return {description,info,title,btn};
}

function flipCard(film, order) {

    const newFilm = pickCard(film);
    const {description, info, btn, title} = newFilm;
    
    if (order === 'toggle') {
        description.classList.toggle('hidden');
        info.classList.toggle('hidden');
        btn.classList.toggle('rotate');
        film.classList.toggle('highlight');
        title.classList.toggle('highlight-title');
    } else if (order === 'remove') {
        description.classList.add('hidden');
        info.classList.remove('hidden');
        btn.classList.remove('rotate');
        film.classList.remove('highlight');
        title.classList.remove('highlight-title');
    } 
}

function resetFlippedCard(id, selector) {
    const newFilmObj = document.querySelectorAll(selector);
    const newFilmArr = [...newFilmObj];
    newFilmArr
        .filter(film => film.id !== id)
        .map(film => flipCard(film, 'remove'));
}

function cleanContainers(...rest) {
    rest.map(item => item.innerHTML = '');
}

function fixSearchSection(section) {
    const sticky = section.offsetTop;
    if (window.pageYOffset > sticky) {
        section.classList.add("sticky");
    } else {
        section.classList.remove("sticky");
    }
}

export { flipCard, resetFlippedCard, cleanContainers, fixSearchSection };