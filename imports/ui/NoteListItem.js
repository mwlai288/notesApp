import React from 'react';
import moment from 'moment';
import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

const NoteListItem = (props) => {
  return (
    <div
      onClick={() => {
        props.Session.set('selectedNoteId', props.note._id);
      }}
    >
      <h5>{props.note.title || 'Untitled Note'}</h5>
      <p>{moment(props.note.updatedAt).format('M/DD/YY')}</p>
    </div>
  );
};

export default withTracker(() => {
  return { Session };
})(NoteListItem);
