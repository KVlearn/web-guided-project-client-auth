import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={() => {
    if (localStorage.getItem('token')) {
      return <Component />
    }
    console.log('redirect it!')
    return <Redirect to="/login" />
  }} />
}

export default PrivateRoute;