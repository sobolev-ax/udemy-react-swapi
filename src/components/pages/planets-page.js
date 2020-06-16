import React, { Component } from 'react';

import {
  PlanetList,
  PlanetDetails,
} from '../sw-components';
import Row from "../row/row";

export default class extends Component {

  state = {
    selected: 5
  }

  onItemSelected = (id) => {
    this.setState({
      selected: id,
    })
  }

  render() {
    const { selected } = this.state;

    return (
      <Row left={  <PlanetList onItemSelected={this.onItemSelected} /> }
        right={ <PlanetDetails itemId={selected} /> } />
    )
  }
}