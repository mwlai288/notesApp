import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import { Notes } from '../api/notes';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

class Editor extends Component {
  state = {
    title: '',
    body: ''
  };

  handleTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
    this.props.call('updateNotes', this.props.note._id, {
      title
    });
  };
  handleBodyChange = (e) => {
    const body = e.target.value;
    this.setState({ body });
    this.props.call('updateNotes', this.props.note._id, { body });
  };

  handleDelete = () => {
    this.props.call('deleteNotes', this.props.note._id);
    // window.location.reload();
    const history = createHistory();
    history.replace('/dashboard');
  };

  componentDidUpdate(prevProps, prevState) {
    const currentNoteId = this.props.note ? this.props.note._id : undefined;
    const prevNoteId = prevProps.note ? prevProps.note._id : undefined;

    if (currentNoteId && currentNoteId !== prevNoteId) {
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body
      });
    }
  }

  render() {
    if (this.props.note) {
      return (
        <div>
          <input
            value={this.state.title}
            placeholder="Untitled Note"
            onChange={this.handleTitleChange}
          />
          <textarea
            value={this.state.body}
            placeholder="Your note here"
            onChange={this.handleBodyChange}
          />
          <button onClick={this.handleDelete}>Delete Note</button>
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
