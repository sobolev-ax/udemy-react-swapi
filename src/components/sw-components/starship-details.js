import React from 'react';

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
  const { swapiService: { getStarship, getStarshipImage } } = props;
  return (
    <ItemDetails
      { ...props }
      getData={getStarship}
      getImageUrl={getStarshipImage}>

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
}

export default withSwapiService(StarshipDetails);
