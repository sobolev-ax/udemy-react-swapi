import React, { Component } from 'react';

import Header from '../header';
import List from '../list';
import Details from '../details';

import SwapiService from '../../services/swapi';

import './app.css';

export default class App extends Component {

  _swapiService = new SwapiService();
  _maxId = 0;

  updatePlanet = async () => {
    const id = Math.floor(Math.random() * 5 + 2);
    const planet = await this._swapiService.getPlanet(id);

    this.setState({
      random: {
        header: planet.name,
        img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
        data: [
          this.createDetail('Population', planet.population),
          this.createDetail('Rotation Period', planet.rotation_period),
          this.createDetail('Diameter', planet.diameter),
        ],
      }
    })
  }

  state = {
    random: {
      header: 'Random Block',
      img: '',
      data: [],
    }
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  createDetail(label, value) {
    return {
      label,
      value,
      key: this._maxId++
    }
  }

  render() {
    const { random: { header, img, data }} = this.state;

    return (
      <main>

        <Header />

        <div className="container">

          <div className="row mb-5">
            <div className="col">
              <Details header={ header } img={ img } data={ data } />
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
