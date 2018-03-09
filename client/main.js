import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { routes, onAuthChange } from '../imports/routes/routes';
import { Session } from 'meteor/session';

import '../imports/startup/simple-schema-config';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});
