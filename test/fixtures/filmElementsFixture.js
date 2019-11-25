const mockedMsg = 'Mensaje de prueba';
const filmObjInput = {
    id:'aaaa2222',
    title:'titulo',
    description:'descripcion',
    director:'director',
    rt_score:'88'
    };

const filmCardOutput = 
                `<li class = "film__item" id = ${filmObjInput.id}>
                      <section class="card__header">
                          <h2 class="film__title">${filmObjInput.title}</h2>
                          <button class="film__button">+</button>
                      </section>       
                      <section class = "card__main">             
                          <p class = "film__description hidden" data-id=${filmObjInput.id}>${filmObjInput.description}</p>
                          <div class = "film__info" data-id=${filmObjInput.id}>
                              <p class = "film__author"><span class = "film-icon"><i class="fas fa-video"></i></span> ${filmObjInput.director}</p>
                          <div><span class = "film-icon"><i class="fas fa-star"></i></span> ${filmObjInput.rt_score}</div>
                      </div>    
                      </section>                        
                  </li>`;

export {mockedMsg, filmObjInput, filmCardOutput};