export default class SwapiService {
  getPeople = async () => {
    const people = await this._getResource('people');

    return people.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this._getResource(`people/${id}`);

    return this._transformPerson(person);
  }

  getPlanets = async () => {
    const people = await this._getResource('planets');

    return people.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this._getResource(`planets/${id}`);

    return this._transformPlanet(planet);
  }

  getStarships = async () => {
    const people = await this._getResource('starships');

    return people.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this._getResource(`starships/${id}`);

    return this._transformStarship(starship);
  }


  _apiBase = 'https://swapi.dev/api';
  _apiImg = 'https://starwars-visualguide.com/assets/img'
  _id = 0;


  _getResource = async (url) => {
    const fullUrl = `${this._apiBase}/${url}`;
    const res = await fetch(fullUrl);

    if(!res.ok) {
      throw new Error(`could not fetch:\n${fullUrl}` +
        `\nrecieved ${res.status}`);
    }
  
    const body = await res.json();
  
    return body;
  }

  _getId = (item) => {
    const regExp = /\/([0-9]*)\/$/;

    return item.url.match(regExp)[1];
  }

  _createDetail = (label, value) => {
    return {
      label,
      value,
      key: this._id++
    }
  }

  _transformPlanet = (planet) => {
    const id = this._getId(planet);

    return {
      id,
      header: planet.name,
      img: `${this._apiImg}/planets/${id}.jpg`,
      details: [
        this._createDetail('Population', planet.population),
        this._createDetail('Rotation Period', planet.rotation_period),
        this._createDetail('Diameter', planet.diameter),
        this._createDetail('Terrain', planet.terrain),
        this._createDetail('Climate', planet.climate),
      ],
    }
  }

  _transformPerson = (person) => {
    const id = this._getId(person);

    return {
      id,
      header: person.name,
      img: `${this._apiImg}/characters/${id}.jpg`,
      details: [
        this._createDetail('Gender', person.gender),
        this._createDetail('Eye', person.eye_color),
        this._createDetail('Hair', person.hair_color),
        this._createDetail('Height', person.height),
        this._createDetail('Mass', person.mass),
      ],
    }
  }

  _transformStarship = (starship) => {
    const id = this._getId(starship);

    return {
      id,
      header: starship.name,
      img: `${this._apiImg}/starships/${id}.jpg`,
      details: [
        this._createDetail('Manufacturer', starship.manufacturer),
        this._createDetail('Model', starship.model),
        this._createDetail('Passengers', starship.passengers),
        this._createDetail('Starship class', starship.starship_class),
      ],
    }
  }
}
