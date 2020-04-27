import React from 'react';

import './details.css';

const Details = () => {
  return (
    <div className="card bg-light border-secondary shadow">
      <div className="row">
        <div className="col-md-4">
          <svg className="card-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
        </div>
        <div className="col-md-8">
          <div className="card-body">

            <h3 className="card-title">
              Planet Name
            </h3>

            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-light">
                <span className="font-weight-bold mr-1">Population:</span>
                123124
              </li>

              <li className="list-group-item bg-light">
                <span className="font-weight-bold mr-1">Rotation Period:</span>
                43
              </li>

              <li className="list-group-item bg-light">
                <span className="font-weight-bold mr-1">Diameter:</span>
                100
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
