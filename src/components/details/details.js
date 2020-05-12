import React from 'react';

import Spinner from '../spinner';

import './details.css';

const Details = ({ data = {}, loading = false, onClose = false }) => {

  const close = onClose ? closeBtn(onClose) : null;
  const content = !loading ? details(data) : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="card bg-light border-secondary shadow">
      { close }
      { spinner }
      { content }
    </div>
  )
}

export default Details;

const closeBtn = (close) => {
  return (
    <button onClick={ close } type="button" className="close c-details-close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  )
}

const details = ({ header, img, details = [] }) => {
  return (
    <div className="row">
      <div className="col-md-4 col-md-4 d-flex justify-content-center align-items-center">
        <img src={ img } alt={ header } className="card-img" />
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
