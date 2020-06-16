import React from 'react';

import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import { withSwapiService } from '../hoc-helpers' 

const withRenderFn = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withRenderFn(renderName)(
      ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(
    withRenderFn(renderName)(
      ItemList)));

const PlanetList = withSwapiService(mapPlanetsMethodsToProps)(
  withData(
    withRenderFn(renderName)(
      ItemList)));

export {
  PersonList,
  StarshipList,
  PlanetList,
};
