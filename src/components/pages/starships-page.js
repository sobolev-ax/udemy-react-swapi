import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  StarshipList,
  StarshipDetails,
} from '../sw-components';
import Row from "../row/row";

const StarshipsPage = ({ history, match }) => {

  const { id } = match.params;

  return (
    <Row left={ <StarshipList onItemSelected={ history.push } /> } right={ <StarshipDetails itemId={ id } /> } />
  )
}

export default withRouter(StarshipsPage);
