import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createHistory();
const unAuthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathname);
  const isAuthenticatedPaged = authenticatedPages.includes(pathname);

  if (isUnAuthenticatedPage && isAuthenticated) {
    history.replace('/dashboard');
  } else if (isAuthenticatedPaged && !isAuthenticated) {
    history.replace('/');
  }
};
export const routes = (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return Meteor.userId() ? <Redirect to="/dashboard" /> : <Login />;
        }}
      />
      <Route
        path="/signup"
        render={() => {
          return Meteor.userId() ? <Redirect to="/dashboard" /> : <Signup />;
        }}
      />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
