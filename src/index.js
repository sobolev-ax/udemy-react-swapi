class SwapiService {
  async getPeople() {
    const people = await this._getResource('people');

    return people.results;
  }

  async getPerson(id) {
    const person = await this._getResource(`people/${id}`);

    return person;
  }

  async getPlanets() {
    const people = await this._getResource('planets');

    return people.results;
  }

  async getPlanet(id) {
    const person = await this._getResource(`planets/${id}`);

    return person;
  }

  async getStarships() {
    const people = await this._getResource('starships');

    return people.results;
  }

  async getStarship(id) {
    const person = await this._getResource(`starships/${id}`);

    return person;
  }


  _apiBase = 'https://swapi.dev/api';

  async _getResource(url) {
    const fullUrl = `${this._apiBase}/${url}`;
    const res = await fetch(fullUrl);

    if(!res.ok) {
      throw new Error(`could not fetch:\n${fullUrl}` +
        `\nrecieved ${res.status}`);
    }
  
    const body = await res.json();
  
    return body;
  }
}

const swapi = new SwapiService();

swapi.getPeople()
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));

swapi.getPerson(1)
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));

swapi.getPlanets()
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));

swapi.getPlanet(1)
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));

swapi.getStarships()
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));

swapi.getStarship(9)
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));
