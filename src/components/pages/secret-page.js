import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

  if (!isLoggedIn)
    return <Redirect to="/login" />

  return <div className="jumbotron">
    <h2>This page full of secrets ;)</h2>
  </div>
}

export default SecretPage;
