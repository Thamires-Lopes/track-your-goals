import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/login';
import SignUpPage from './pages/signUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
