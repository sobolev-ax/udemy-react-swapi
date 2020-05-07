import React from 'react';

import './row.css';

const Row = ({left, right}) => {
  return (
    <div className="row">
      <div className="col-lg-6 mb-3 mb-lg-0">
        { left }
      </div>
      <div className="col-lg-6">
        { right }
      </div>
    </div>
  )
}

export default Row;
