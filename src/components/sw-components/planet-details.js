import React from 'react';

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  const { swapiService: { getPlanet, getPlanetImage } } = props;
  return (
    <ItemDetails
      { ...props }
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field="name" label="Name" />
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />

    </ItemDetails>
  );
}

export default withSwapiService(PlanetDetails)
