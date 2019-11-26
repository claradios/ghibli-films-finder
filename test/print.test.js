import { createNodeFilm, printErrorMsg, addClickListener } from '../js/print.js';
import { mockedMsg, filmObjInput, filmCardOutput } from './fixtures/filmElementsFixture.js';


describe('methods for creating HTML Film Card Elements', () => {
    test('in createNodeFilm the result is defined', () => {
        const film = {};
        expect(createNodeFilm(film)).toBeDefined()
    });
    test('in createNodeFilm returns string', () => {
        expect(createNodeFilm(filmObjInput)).toEqual(filmCardOutput)
    });
})

describe('method for creating messages into html tag', () => {

    test('in printMsg the result is defined with nice paht', () => {
        document.body.innerHTML = '<section class="testing"></section>'

        const selector = document.querySelector('.testing')
        const output = `<p class="info__no-result">${mockedMsg}</p>`;

        printErrorMsg(mockedMsg, selector);

        expect(selector.innerHTML).toBe(output);
    });

})

describe('method that add listeners to every button existing on DOM', () => {

    test('if introduce element , the element gets its listener after func execution', () => {
        document.body.innerHTML = `<button class="btn-a">+</button>
                                   <button class="btn-b">+</button>
                                   <button class="btn-c">+</button>`;

        const selector = 'button';
        const func = jest.fn();
        addClickListener(selector, func);

        const oneBtn = document.querySelector('.btn-b');
        oneBtn.click();
        
        expect(func).toHaveBeenCalled();
    });
})

