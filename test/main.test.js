//import { callFilms, showFilmAnswer, createCard, mapCards } from '../js/main.js';
import { showFilmAnswer, mapCards } from '../js/main.js';
import { apiFilms } from './fixtures/filmApiFixture.js';
import { flipCard, filterTitle, cleanContainers, pickCard, resetFlippedCard } from '../js/interaction.js';
import { createNodeFilm, printErrorMsg, addClickListener } from '../js/print.js';


describe("Function that gets info from the array and convert it into html node", () => {

    test("it should return an string html like", () => {


        const fakeArray = [
            {
                "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
                "title": "Castle in the Sky",
                "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
                "director": "Hayao Miyazaki",
                "producer": "Isao Takahata",
                "release_date": "1986",
                "rt_score": "95",
            }
        ]

        mapCards(fakeArray);

        expect(mapCards).toBeTruthy();
        expect(mapCards(fakeArray)).toMatch(/Castle in the Sky/);
        expect(mapCards(fakeArray)).toMatch(/orphan Sheeta inherited a mysterious/);
        expect(mapCards(fakeArray)).toMatch(/Hayao Miyazaki/);
        expect(mapCards(fakeArray)).toMatch(/95/);
    });
});

describe("Function that introudces all the final result into html if any or includes error msg if empty", () => {

    test("it should be a list with content after execution", () => {

        document.body.innerHTML = `<div class="display__additional-info"></div>
                                            <ul class="display__list">`;

        const container = document.querySelector('.display__additional-info');
        const list = document.querySelector('.display__list');
        const result = '<li>contenido de la lista</li>';

        showFilmAnswer(result, list, container);

        expect(showFilmAnswer).toBeTruthy();
        expect(container.innerHTML.length).toBe(0);
        expect(list.innerHTML).toEqual(result);

    });

    test("it should call printError if result === '' ", () => {

        document.body.innerHTML = `<div class="display__additional-info"></div>
                                            <ul class="display__list">`;

        const container = document.querySelector('.display__additional-info');
        const list = document.querySelector('.display__list');
        const result = '';
        const errorMsg = '<p class="info__no-result">Your search has no match. Please try again</p>';

        showFilmAnswer(result, list, container);

        expect(showFilmAnswer).toBeTruthy();
        expect(list.innerHTML.length).toBe(0);
        expect(container.innerHTML).toEqual(errorMsg);

    });
});


// describe("Function calls all functions necessary to paint the cards", () => {

// // function blablabla (array = []) {
// //     const cardSelector = '.film__item';
// //     const btnSelector = '.film__button';
// //     const filterResult = filterTitle(array,searchText);
// //     const mapResult = mapCards(filterResult);

// //     cleanContainers(infoContainer, list);
// //     showFilmAnswer(mapResult);
// //     addClickListener(cardSelector, showDescription);
// //     addClickListener(btnSelector, showDescription);
// //   }
//     test("function calls works", () => {
//         document.body.innerHTML = `<div class="display__additional-info"></div>
//                                    <ul class="display__list">`;

//         const infoContainer = document.querySelector('.display__additional-info');
//         const list = document.querySelector('.display__list');
//         const searchTest = '';

//         const mapResult = jest.fn();

//         // > true
//         createCard(apiFilms);
//         expect(createCard).toBeTruthy();
//         expect(mapResult).toHaveBeenCalled();

//        // expect(myMockFn).toHaveBeenCalled();
//         //expect(myMockFn((err, val) => console.log(val))).toBe(true);
//         ;

//     });
// });

