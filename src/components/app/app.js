import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <Router>
            <div className="stardb-app">
              <Header changeService={ this.changeService } />

              <RandomPlanet />

              <Route path="/" exact render={() => <h1>Welcome to StarDB</h1>} />

              <Route path="/people" render={() => <h1>People</h1>} />
              <Route path="/people" component={ PeoplePage } />
              <Route path="/starships" render={() => <h1>Starships</h1>} />
              <Route path="/starships" component={ StarshipsPage } />
              <Route path="/planets" render={() => <h1>Planets</h1>} />
              <Route path="/planets" component={ PlanetsPage } />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
