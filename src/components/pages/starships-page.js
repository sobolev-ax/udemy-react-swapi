import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import {
  StarshipList,
  StarshipDetails,
} from '../sw-components';
import Row from "../row/row";

const StarshipsPage = ({ history }) => {
  return (
    <Row left={ <StarshipList onItemSelected={history.push} /> }
      right={ <Route path="/starships/:id" exact render={
        ({ match: { params: { id } } }) => <StarshipDetails itemId={ id } />
      } /> }
    />
  )
}

export default withRouter(StarshipsPage);
