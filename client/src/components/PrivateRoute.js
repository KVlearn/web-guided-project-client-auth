import React, { Component } from 'react';
import Route from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route component={Component} {...props} />
}

export default PrivateRoute;