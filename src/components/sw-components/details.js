import React from 'react';

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getStarship,
  getPlanet,
  getPersonImage,
  getStarshipImage,
  getPlanetImage,
} = new SwapiService();

const PersonDetails = (
  <ItemDetails
    itemId={11}
    getData={getPerson}
    getImageUrl={getPersonImage} >

    <Record field="gender" label="Gender" />
    <Record field="eyeColor" label="Eye Color" />

  </ItemDetails>
);
const StarshipDetails = (
  <ItemDetails
    itemId={5}
    getData={getStarship}
    getImageUrl={getStarshipImage}>

    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);
const PlanetDetails = (
  <ItemDetails
    itemId={7}
    getData={getPlanet}
    getImageUrl={getPlanetImage}>

    <Record field="name" label="Name" />
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />

  </ItemDetails>
);

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
};
