import React from 'react';

import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import { withSwapiService } from '../hoc-helpers' 

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

const mapPersonMethodsToProps = (SwapiService) => {
  return {
    getData: SwapiService.getAllPeople
  };
};

const mapStarshipMethodsToProps = (SwapiService) => {
  return {
    getData: SwapiService.getAllStarships
  };
};

const mapPlanetsMethodsToProps = (SwapiService) => {
  return {
    getData: SwapiService.getAllPlanets
  };
};

const PersonList = withSwapiService(
  withData(withRenderFn(ItemList, renderName)),
  mapPersonMethodsToProps
);

const StarshipList = withSwapiService(
  withData(withRenderFn(ItemList, renderName)),
  mapStarshipMethodsToProps
);

const PlanetList = withSwapiService(
  withData(withRenderFn(ItemList, renderName)),
  mapPlanetsMethodsToProps,
);

export {
  PersonList,
  StarshipList,
  PlanetList,
};
