import React from 'react';

import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const withRenderFn = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        { fn }
      </Wrapped>
    )
  }
}

const renderName = ({name}) => <span>{name}</span>;

const PersonList = withData(withRenderFn(ItemList, renderName), getAllPeople);
const StarshipList = withData(withRenderFn(ItemList, renderName), getAllStarships);
const PlanetList = withData(withRenderFn(ItemList, renderName), getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList,
};
