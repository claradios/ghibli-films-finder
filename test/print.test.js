import { createNodeFilm } from '../js/print.js';



describe('methods for creating HTML Elements', () => {
    test('the result is defined', () => {
        const film = {};
        expect(createNodeFilm(film)).toBeDefined()
    });
    test('the result is defined', () => {
        const input = {
            id:'aaaa2222',
            title:'titulo',
            description:'descripcion',
            director:'director',
            rt_score:'88'
            };
            const item = 
                `<li class = "film__item" id = ${input.id}>
                      <section class="card__header">
                          <h2 class="film__title">${input.title}</h2>
                          <button class="film__button">+</button>
                      </section>       
                      <section class = "card__main">             
                          <p class = "film__description hidden" data-id=${input.id}>${input.description}</p>
                          <div class = "film__info" data-id=${input.id}>
                              <p class = "film__author"><span class = "film-icon"><i class="fas fa-video"></i></span> ${input.director}</p>
                          <div><span class = "film-icon"><i class="fas fa-star"></i></span> ${input.rt_score}</div>
                      </div>    
                      </section>                        
                  </li>`;
        expect(createNodeFilm(input)).toEqual(item)
    });
})

