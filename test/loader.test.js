import {loader} from '../js/loader.js';

// los elementos del DOM son difíciles de testear:

describe('loader component function', () => {
    const input = window;
    test('add loader to html when introduce parentElement', () => {
    expect(loader(input)).toBeTruthy()
    })
    })

