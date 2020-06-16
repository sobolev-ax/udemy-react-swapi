import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import { StarshipsPage, PlanetsPage, PeoplePage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
  };

  changeService = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;

      console.log(`Service switched to ${Service.name}`)
      return {
        swapiService: new Service(),
      }
    });
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.state.swapiService } >
          <div className="stardb-app">
            <Header changeService={ this.changeService } />

            <RandomPlanet />

            <PeoplePage />
            <StarshipsPage />
            <PlanetsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
