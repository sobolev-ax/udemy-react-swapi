import React, { Component } from 'react';

import Header from '../header';
import List from '../list';
import Details from '../details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi';

import './app.css';

export default class App extends Component {

  _swapiService = new SwapiService();
  _maxId = 0;

  _updateRandom = async () => {
    const id = Math.floor(Math.random() * 5 + 2);
    await this._swapiService.getPlanet(id)
      .then((random) => this._onLoaded('random', random))
      .catch(() => this._onError('random'));
  }

  _updateListPerson = async () => {
    await this._swapiService.getPeople()
      .then((list) => this._onLoaded('list', list))
      .catch(() => this._onError('list'));
  }

  _updateSelectedPerson = async () => {
    const { selectedId } = this.state;

    this.setState({
      selected: {
        loading: true,
        error: false,
      },
    });

    await this._swapiService.getPerson(selectedId)
      .then((person) => this._onLoaded('selected', person))
      .catch(() => this._onError('selected'));
  }

  _onLoaded = (label, data) => {

    console.log(`App: ${ label } _onLoaded`);

    this.setState({
      [label]: {
        data,
        loading: false,
        error: false,
      },
    })
  }

  _onError = (label) => {

    console.log(`App: ${ label } _onError`);

    this.setState({
      [label]: {
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
    randomInterval: 0,
    randomVisible: false,

    list: {
      data: {},
      loading: true,
      error: false,
    },

    selected: {
      data: {},
      loading: true,
      error: false,
    },
    selectedId: null,
  }

  componentDidMount() {
    const FIRST_PERSON_ID = '1';

    this.startRandomPlanet();
    this.changeSelectedPerson(FIRST_PERSON_ID);

    this._updateListPerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedId !== this.state.selectedId) {
      this._updateSelectedPerson();
    }
  }

  startRandomPlanet = () => {
    this._updateRandom();

    this.setState({
      randomInterval: setInterval(this._updateRandom, 5000),
      randomVisible: true,
    })
  }

  stopRandomPlanet = () => {
    this.setState({
      random: {
        loading: true,
        error: false,
      },
      randomVisible: false,
    });

    clearInterval(this.state.randomInterval);
  }

  changeSelectedPerson = (id) => {
    this.setState({
      selectedId: id,
    });
  }

  render() {
    const { random, randomVisible, list, selected, selectedId } = this.state;

    const _randomBlock = randomVisible ? randomBlock(random, this.stopRandomPlanet) : null;

    const listEl = (
      <ErrorBoundry>
        <List { ...list }
          selected={ selectedId }
          onClick={ this.changeSelectedPerson }>

            {(item) => (<span className="font-weight-bold">{item.header}</span>)}

        </List>
      </ErrorBoundry>
    );

    const detailsEl = <Details { ...selected } />;

    return (
      <ErrorBoundry>
        <main>

          <Header />

          <div className="container">

            { _randomBlock }

            <Row left={ listEl } right={ detailsEl } />

          </div>
        </main>
      </ErrorBoundry>
    )
  }
}

const randomBlock = (random, onClose) => {
  return (
    <div className="row mb-5">
      <div className="col">
        <ErrorBoundry>
          <Details { ...random } onClose={ onClose } />
        </ErrorBoundry>
      </div>
    </div>
  )
}
