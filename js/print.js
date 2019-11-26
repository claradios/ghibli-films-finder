'use strict';

function createNodeFilm(film) {
    const { id, title, description, director, rt_score } = film;
    const item =
        `<li class = "film__item" id = ${id}>
                      <section class="card__header">
                          <h2 class="film__title">${title}</h2>
                          <button class="film__button">+</button>
                      </section>       
                      <section class = "card__main">             
                          <p class = "film__description hidden" data-id=${id}>${description}</p>
                          <div class = "film__info" data-id=${id}>
                              <p class = "film__author"><span class = "film-icon"><i class="fas fa-video"></i></span> ${director}</p>
                          <div><span class = "film-icon"><i class="fas fa-star"></i></span> ${rt_score}</div>
                      </div>    
                      </section>                        
                  </li>`;
    return item;
}

function addClickListener(selector, func) {
    if (selector && func) {
        const selection = document.querySelectorAll(`${selector}`);
        for (const item of selection) {
            item.addEventListener('click', func);
        }
    }
}


function printErrorMsg(text = '', container) {
    if (container) {
        container.innerHTML = `<p class="info__no-result">${text}</p>`
    }
}

export { createNodeFilm, printErrorMsg, addClickListener };