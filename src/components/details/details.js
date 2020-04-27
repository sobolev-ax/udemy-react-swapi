import React from 'react';

import './details.css';

const Details = ({ header, img, data = [] }) => {
  return (
    <div className="card bg-light border-secondary shadow">
      <div className="row">
        <div className="col-md-4">
          <img src={ img } alt={ header } height="100%" width="100%" className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">

            <h3 className="card-title">
              { header }
            </h3>

            <ul className="list-group list-group-flush">
              {
                data.map(({ label, value, key }) => {
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
    </div>
  )
}

export default Details;
