'use strict';

import { callApi } from './service.js';
import { createNodeFilm, addClickListener, printErrorMsg } from './print.js';
import { flipCard, cleanContainers, fixSearchSection, resetFlippedCard } from './interaction.js';
import { loader } from './loader.js';

// html tags
const filter = document.querySelector('.search__field');
const list = document.querySelector('.display__list');
const infoContainer = document.querySelector('.display__additional-info');
const searchSection = document.querySelector('.app__search');

// sounds
const flipSound = new Audio('sounds/cardflip.mp3');
const noMatchSound = new Audio('sounds/nomatch.mp3');

// messages
const errorMsg = 'Your search has no match. Please try again';
const apiErrMsg = 'Ooooops!! Something went wrong.'

// films info and user search
let filmArr = [];
let searchText = '';


function showDescription(event) {
  const film = event.currentTarget;
  const id = film.id;
  resetFlippedCard(id,'.film__item');  
  flipCard(film, 'toggle');
  flipSound.play();
}

function filterAndMap(array) {
  let acc = '';
  array
    .filter(film => (film.title || film.description).toLowerCase().includes(searchText.toLowerCase()))
    .map(film => {
      const filmCard = createNodeFilm(film);
      acc += filmCard;
    });

  return acc;
}


function showFilmAnswer(result) {
  if (result !== '') {
    list.innerHTML = result;
  } else {
    printErrorMsg(errorMsg, infoContainer);
    noMatchSound.play();
  }
}


export function createFilteredInfo(array) {
  const result = filterAndMap(array);
  cleanContainers(infoContainer, list);
  showFilmAnswer(result);
  addClickListener('.film__item', showDescription);
  addClickListener('.film__button', showDescription);
}

function callFilms() {
  callApi()
    .then(data => {
      filmArr = data;
      infoContainer.innerHTML = '';
      return createFilteredInfo(filmArr);
    })
    .catch(err => {
      console.log(err);
      return printErrorMsg(apiErrMsg, infoContainer);
    });
}

// async function callFilms() {
//   try {
//     let res = await fetch(ENDPOINT);
//     let data = await res.json();

//     filmArr = data;
//     infoContainer.innerHTML = '';

//     return createFilteredInfo(filmArr);

//   } catch (err) {
//     console.log(err);
//     return printErrorMsg(apiErrMsg, infoContainer);
//   }
// };

function searchFilm(event) {
  const inputValue = event.currentTarget.value;
  searchText = inputValue;
  createFilteredInfo(filmArr);
}

loader(infoContainer);

setTimeout(callFilms, 2000);

window.onscroll = () => fixSearchSection(searchSection);

filter.addEventListener('keyup', searchFilm);


