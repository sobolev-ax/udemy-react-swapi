import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
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
        <div className="stardb-app">
          <Header />

          { planet }

          <Row left={
            <PersonList onItemSelected={() => {}}>
              { ({name}) => <span>{name}</span> }
            </PersonList>
          } 
          right={
            PersonDetails
          } />

          <Row left={
            <StarshipList onItemSelected={() => {}}>
              { ({name}) => <span>{name}</span> }
            </StarshipList>
          } 
          right={
            StarshipDetails
          } />

          <Row left={
            <PlanetList onItemSelected={() => {}}>
              { ({name}) => <span>{name}</span> }
            </PlanetList>
          } 
          right={
            PlanetDetails
          } />

        </div>
      </ErrorBoundry>
    );
  }
}
