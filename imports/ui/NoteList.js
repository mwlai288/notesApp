import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Notes } from '../api/notes';

import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

const NoteList = (props) => {
  return (
    <div>
      <NoteListHeader />
      {props.notes.length === 0 ? <NoteListEmptyItem /> : undefined}
      {props.notes.map((note) => {
        return <NoteListItem key={note._id} note={note} />;
      })}
      Note Count: {props.notes.length}
    </div>
  );
};

export default withTracker(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  Meteor.subscribe('notes');

  return {
    notes: Notes.find()
      .fetch()
      .map((note) => {
        return {
          ...note,
          selected: note._id === selectedNoteId
        };
      })
  };
})(NoteList);
