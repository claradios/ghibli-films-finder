import { apiFilms } from './fixtures/filmApiFixture.js';
import { callApi } from '../js/service.js';
const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';


describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('calls google and returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify(apiFilms))
 
    //assert on the response
    callApi().then(res => {

      expect(res).toEqual(apiFilms)
    })
 
    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(ENDPOINT)
  })
})
  