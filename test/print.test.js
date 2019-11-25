import { createNodeFilm, printErrorMsg } from '../js/print.js';
import { mockedMsg, filmObjInput, filmCardOutput } from './fixtures/filmElementsFixture.js';
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><section>Hello world</section>`);
// const selector = dom.window.document.querySelector("section");
// const dom = document.body.innerHTML = '<section>TEXT</section>'


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


