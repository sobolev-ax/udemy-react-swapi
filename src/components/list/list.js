import React from 'react';

import './list.css';

const List = () => {
  return (
    <div className="shadow list-group">
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark active">
        Cras justo odio
      </a>
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark">Dapibus ac facilisis in</a>
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark">Morbi leo risus</a>
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark">Porta ac consectetur ac</a>
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark">Dapibus ac facilisis in</a>
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark">Morbi leo risus</a>
      <a href="./" className="list-group-item list-group-item-action list-group-item-dark">Porta ac consectetur ac</a>
    </div>
  )
}

export default List;
