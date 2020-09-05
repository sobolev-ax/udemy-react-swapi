import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ changeService }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
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