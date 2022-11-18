import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthencationRoute = ({ component: Component, ...Props }) => {
  const Authenticated = localStorage.getItem('token');
  console.log('auth', Authenticated);

  if (!Authenticated) {
    return <Redirect to="/" />;
  } else {
    return <Redirect to="/userdashboard" />;
  }
};
export default AuthencationRoute;
