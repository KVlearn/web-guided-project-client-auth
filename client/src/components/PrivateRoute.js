import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={() => {
    return <Component />
  }} />
}

export default PrivateRoute;