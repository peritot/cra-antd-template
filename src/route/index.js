import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './config';

const Route = () => (
  <BrowserRouter>
    <Switch>{renderRoutes(routes)}</Switch>
  </BrowserRouter>
);

export default Route;
