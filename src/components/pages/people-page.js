import React, { Component } from 'react';

import {
  PersonList,
  PersonDetails,
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
      <Row left={  <PersonList onItemSelected={this.onItemSelected} /> }
        right={ <PersonDetails itemId={selected} /> } />
    )
  }
}