'use strict';

import { callApi } from './service.js';
import { createNodeFilm, addClickListener, printErrorMsg } from './print.js';
import { filterTitle, showDescription, cleanContainers, fixSearchSection} from './interaction.js';
import { loader } from './loader.js';
import {waitForCalling} from './setTimeOut.js'

// html tags
const filter = document.querySelector('.search__field');
const list = document.querySelector('.display__list');
const infoContainer = document.querySelector('.display__additional-info');
const searchSection = document.querySelector('.app__search');

// sounds
const noMatchSound = new Audio('sounds/nomatch.mp3');

// messages
const errorMsg = 'Your search has no match. Please try again';
const apiErrMsg = 'Ooooops!! Something went wrong.'

// films info and user search
let filmArr = [];
let searchText = '';


function showFilmAnswer(result) {
  if (result !== '') {
    list.innerHTML = result;
  } else {
    printErrorMsg(errorMsg, infoContainer);
    noMatchSound.play();
  }
}

function mapCards(array) {
  let acc = '';
  array.map(film => {
      const filmCard = createNodeFilm(film);
      acc += filmCard;
    });

  return acc;
}



function createFilteredInfo(array) {
  const cardSelector = '.film__item';
  const btnSelector = '.film__button';
  const filterResult = filterTitle(array,searchText);
  const mapResult = mapCards(filterResult);

  cleanContainers(infoContainer, list);
  showFilmAnswer(mapResult);
  addClickListener(cardSelector, showDescription);
  addClickListener(btnSelector, showDescription);
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
waitForCalling(callFilms);

window.onscroll = () => fixSearchSection(searchSection);

filter.addEventListener('keyup', searchFilm);


export {filterTitle, callFilms};