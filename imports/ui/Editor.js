import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import { Notes } from '../api/notes';
import { Meteor } from 'meteor/meteor';

class Editor extends Component {
  handleBodyChange = (e) => {
    e.preventDefault();
    this.props.call('updateNotes', this.props.note._id, {
      body: e.target.value
    });
  };

  handleTitleChange = (e) => {
    e.preventDefault();
    this.props.call('updateNotes', this.props.note._id, {
      title: e.target.value
    });
  };

  render() {
    if (this.props.note) {
      return (
        <div>
          <input
            value={this.props.note.title}
            placeholder="Untitled Note"
            onChange={this.handleTitleChange}
          />
          <textarea
            value={this.props.note.body}
            placeholder="Your note here"
            onChange={this.handleBodyChange}
          />
          <button>Delete Note</button>
        </div>
      );
    } else {
      return (
        <p>
          {this.props.selectedNoteId
            ? 'Note not found.'
            : 'Pick or Create a note.'}
        </p>
      );
    }
  }
}
export default withTracker(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call
  };
})(Editor);
