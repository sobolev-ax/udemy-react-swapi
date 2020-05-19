import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const PersonList = withData(ItemList, getAllPeople);
const StarshipList = withData(ItemList, getAllStarships);
const PlanetList = withData(ItemList, getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList,
};
