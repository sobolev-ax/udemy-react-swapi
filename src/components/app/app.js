import React, { Component } from 'react';

import Header from '../header';
import List from '../list';
import Details from '../details';

import SwapiService from '../../services/swapi';

import './app.css';

export default class App extends Component {

  _swapiService = new SwapiService();
  _maxId = 0;

  updateRandom = async () => {
    const id = Math.floor(Math.random() * 5 + 2);
    await this._swapiService.getPlanet(id)
      .then((random) => this._onRandomLoaded(random))
      .catch(this._onRandomError);
  }

  _onRandomLoaded = (data) => {
    this.setState({
      random: {
        data,
        loading: false,
        error: false,
      },
    })
  }

  _onRandomError = () => {
    this.setState({
      random: {
        data: {},
        loading: false,
        error: true,
      },
    })
  }

  state = {
    random: {
      data: {},
      loading: true,
      error: false,
    },
  }

  constructor() {
    super();
    this.updateRandom();
  }

  render() {
    const { random } = this.state;

    return (
      <main>

        <Header />

        <div className="container">

          <div className="row mb-5">
            <div className="col">
              <Details { ...random } />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <List />
            </div>
            <div className="col-lg-6">
              <Details />
            </div>
          </div>

        </div>
      </main>
    )
  }
}
