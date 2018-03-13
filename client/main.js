import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { routes, onAuthChange } from '../imports/routes/routes';
import { Session } from 'meteor/session';

import '../imports/startup/simple-schema-config';
const history = createHistory();

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  if (selectedNoteId) {
    history.replace(`/dashboard/${selectedNoteId}`);
  }
});

Meteor.startup(() => {
  Session.set('selectedNoteId', undefined);
  render(routes, document.getElementById('render-target'));
});
