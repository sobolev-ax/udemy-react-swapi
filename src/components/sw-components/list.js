import React from 'react';

import ItemList from '../item-list';
import { withData, withRenderFn, compose } from '../hoc-helpers';
import { withSwapiService } from '../hoc-helpers' 

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

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withRenderFn(renderName),
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withRenderFn(renderName),
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetsMethodsToProps),
  withData,
  withRenderFn(renderName),
)(ItemList);

export {
  PersonList,
  StarshipList,
  PlanetList,
};
