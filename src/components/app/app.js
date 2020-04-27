import React, { Component } from 'react';

import Header from '../header';
import List from '../list';
import Details from '../details';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <main>

        <Header />

        <div className="container">

          <div className="row mb-5">
            <div className="col">
              <Details />
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
