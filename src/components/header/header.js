import React from 'react';

import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">

        <a className="navbar-brand" href="./">
          Star Wars
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">

            <li className="nav-item active">
              <a className="nav-link" href="./">People</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./">Planets</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="./">Starships</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
