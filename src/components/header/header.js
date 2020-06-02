import React from 'react';

import './header.css';

const Header = ({ changeService }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#/people">People</a>
        </li>
        <li>
          <a href="#/planets">Planets</a>
        </li>
        <li>
          <a href="#/starships">Starships</a>
        </li>
      </ul>

      <button type="button"
        className="btn btn-outline-primary btn-small"
        onClick={ changeService }>
        Change Service
      </button>
    </div>
  );
};

export default Header;