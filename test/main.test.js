// import {filterTitle, callFilms, showFilmAnswer, createCard, mapCards} from '../js/main.js';
//import {showFilmAnswer}  from '../js/main.js';
import {flipCard, filterTitle, cleanContainers, pickCard, resetFlippedCard } from '../js/interaction.js';
debugger
// function blablabla (array = []) {
//     const cardSelector = '.film__item';
//     const btnSelector = '.film__button';
//     const filterResult = filterTitle(array,searchText);
//     const mapResult = mapCards(filterResult);

//     cleanContainers(infoContainer, list);
//     showFilmAnswer(mapResult);
//     addClickListener(cardSelector, showDescription);
//     addClickListener(btnSelector, showDescription);
//   }

describe("Function calls all functions necessary to paint the cards", () => {


    test("function calls works", () => {
        const filterTitle = jest.fn();
        // const mapCards = jest.fn();
        // const cleanContainers = jest.fn();
        // const showFilmAnswer = jest.fn();
        // const addClickListener = jest.fn();

        blablabla([]);

        expect(filterTitle).toHaveBeenCalled();
        expect(callFilms).toHaveBeenCalled();
        expect(showFilmAnswer).toHaveBeenCalled();
        expect(cleanContainers).toHaveBeenCalled();
        expect(mapCards).toHaveBeenCalled();
        expect(addClickListener).toHaveBeenCalled();

    });
});

