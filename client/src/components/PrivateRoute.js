import React, { Component } from 'react';
import Route from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
  console.log('bk: props,component: ', props, component);
  return <Route component={Component} {...props} />
}

export default PrivateRoute;