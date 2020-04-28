import React from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './details.css';

const Details = ({ data = {}, loading = false, error = false }) => {
  
  const content = !(loading || error) ? details(data) : null;
  const spinner = loading ? <Spinner /> : null;
  const indicator = error ? <ErrorIndicator /> : null;

  return (
    <div className="card bg-light border-secondary shadow">
      { indicator }
      { spinner }
      { content }
    </div>
  )
}

const details = ({ header, img, details = [] }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={ img } alt={ header } width="100%" className="card-img" />
      </div>
      <div className="col-md-8">
        <div className="card-body">

          <h3 className="card-title">
            { header }
          </h3>

          <ul className="list-group list-group-flush">
            {
              details.map(({ label, value, key }) => {
                return (
                  <li key={ key } className="list-group-item bg-light">
                    <span className="font-weight-bold mr-2">{label}:</span>
                    { value }
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Details;
