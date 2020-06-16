import React, { Component } from 'react';

import {
  StarshipList,
  StarshipDetails,
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
      <Row left={  <StarshipList onItemSelected={this.onItemSelected} /> }
        right={ <StarshipDetails itemId={selected} /> } />
    )
  }
}