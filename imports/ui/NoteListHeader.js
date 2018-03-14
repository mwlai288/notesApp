import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Notes from '../api/notes';
import { Session } from 'meteor/session';

const NoteListHeader = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.meteorCall('addNotes', (err, res) => {
            if (res) {
              props.Session.set('selectedNoteId', res);
            }
          });
        }}
      >
        New Note
      </button>
    </div>
  );
};

export default withTracker(() => {
  return {
    meteorCall: Meteor.call,
    Session
  };
})(NoteListHeader);
