'use strict';
// api endpoint
const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';

const callApi = () => {
    return fetch(ENDPOINT).then(res => res.json());
}


export {callApi};


