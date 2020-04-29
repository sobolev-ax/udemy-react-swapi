import React from 'react';

import classNames from 'classnames';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './list.css';

const List = ({ data = [], loading = false, error = false, onClick = () => {}, selected = 0 }) => {
  
  const content = !(loading || error) ? list(data, onClick, selected) : null;
  const spinner = loading ? <Spinner /> : null;
  const indicator = error ? <ErrorIndicator /> : null;

  return (
    <div className="shadow list-group">
      { content }
      { spinner }
      { indicator }
    </div>
  )
}

const list = (data, onClick, selected) => {
  return data.map(({ header, id }) => {

    const cssClasses = classNames(
      'list-group-item',
      'list-group-item-action',
      'list-group-item-dark',
      'c-item-list',
      {
        active: selected === id,
      }
    );

    return (
      <li key={ id }
        className={ cssClasses }
        onClick={ () => onClick(id) } >
        { header }
      </li>
    )
  })
}

export default List;
