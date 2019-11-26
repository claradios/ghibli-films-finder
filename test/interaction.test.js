import { apiFilms } from './fixtures/filmApiFixture.js';
import { mockedFilm } from './fixtures/filmElementsFixture.js';
import { filterTitle, cleanContainers, pickCard } from '../js/interaction.js';


describe("Filter function", () => {

    test("it should filter by a search term (a)", () => {

        const input = [
            { title: 'fast and furious', description: "https://www.url1.dev" },
            { title: 'oooooo', description: "https://www.url2.dev" },
            { title: 'eeeeeee', description: "https://www.link3.dev" }
        ];
        const text = 'a';
        const output = [{ title: 'fast and furious', description: "https://www.url1.dev" }];
        expect(filterTitle(input, text)).toEqual(output);
    });

    test("it shoud filter by title search (Castle in the Sky) no matter if uppercase or not", () => {
        const textB = 'CastLE in thE SKY'
        expect(filterTitle(apiFilms, textB)).toEqual([apiFilms[0]]);
    });
});

describe("Function that reset any containers interior to empty", () => {

    test("it should empty a container that is .lenght > 0", () => {

        document.body.innerHTML = '<section class="testing">Info for testing</section>';
        const selector = document.querySelector('.testing');
        const output = '';
        cleanContainers(selector);

        expect(selector.innerHTML).toEqual(output);
        expect(selector.innerHTML.length).toBe(0);
    });

});


describe("Function that takes elements from dom ", () => {

    test("it should return elements that contain specific clases", () => {

        document.body.innerHTML =  `${mockedFilm}`;
        const film = document.querySelector('li');
        const result =pickCard(film);
        expect(result.description.classList.contains('film__description')).toBe(true);
        expect(result.info.classList.contains('film__info')).toBe(true);
        expect(result.btn.classList.contains('film__button')).toBe(true);
        expect(result.title.classList.contains('film__title')).toBe(true);
    });

});


