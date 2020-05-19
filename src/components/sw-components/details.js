import React from 'react';

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = (props) => (
  <SwapiServiceConsumer>
    { ({ getPerson, getPersonImage }) => (
      <ItemDetails
        { ...props }
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);
const StarshipDetails = (props) => (
  <SwapiServiceConsumer>
    { ({ getStarship, getStarshipImage }) => (
      <ItemDetails
        { ...props }
        getData={getStarship}
        getImageUrl={getStarshipImage}>
  
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);
const PlanetDetails = (props) => (
  <SwapiServiceConsumer>
    { ({ getPlanet, getPlanetImage }) => (
      <ItemDetails
        { ...props }
        getData={getPlanet}
        getImageUrl={getPlanetImage}>

        <Record field="name" label="Name" />
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />

      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
};
