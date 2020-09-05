import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn)
    return <Redirect to="/" />

  return <div className="jumbotron">
    <h2>Welcome to login page!</h2>
    <button className="btn btn-primary" onClick={() => onLogin(true)}>Login</button>
  </div>
}

export default LoginPage;
