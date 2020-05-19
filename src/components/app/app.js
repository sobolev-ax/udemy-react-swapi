import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
} from '../sw-components';
import Row from "../row/row";

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.swapiService } >
          <div className="stardb-app">
            <Header />

            { planet }

            <Row left={ <PersonList onItemSelected={() => {}} /> }
              right={ <PersonDetails itemId={1} /> } />

            <Row left={  <StarshipList onItemSelected={() => {}} /> }
              right={ <StarshipDetails itemId={5} /> } />

            <Row left={ <PlanetList onItemSelected={() => {}} /> } 
              right={ <PlanetDetails itemId={7} /> } />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
