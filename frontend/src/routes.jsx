import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import { dropdownRoutes, headerRoutes } from './routeslist';

const Routes = () => (
  <div>
    <Header headerRoutes={headerRoutes} dropdownRoutes={dropdownRoutes} />
    <BrowserRouter>
      <Switch>
        {headerRoutes.map((route) => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  </div>

);

export default Routes;
