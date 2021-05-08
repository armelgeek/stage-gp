import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project/index';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import Login from 'Auth/Login/index';
import Profil from 'User/Profil';
import Home from 'Home';
const Routes = () => (
  <Router history={history}>
    <Switch>
      
      <Route path="/login" component={Login} />
      <Route path="/profil" component={Profil} />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/nos-projets" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
