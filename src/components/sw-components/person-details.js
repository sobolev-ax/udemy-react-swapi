import React from 'react';

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
  const { swapiService: { getPerson, getPersonImage } } = props;
  return (
    <ItemDetails
      { ...props }
      getData={getPerson}
      getImageUrl={getPersonImage} >

      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />

    </ItemDetails>
  )
};

export default withSwapiService(PersonDetails);
