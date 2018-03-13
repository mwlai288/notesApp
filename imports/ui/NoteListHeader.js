import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Notes from '../api/notes';

const NoteListHeader = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.meteorCall('addNotes');
        }}
      >
        New Note
      </button>
    </div>
  );
};

export default withTracker(() => {
  return {
    meteorCall: Meteor.call
  };
})(NoteListHeader);
