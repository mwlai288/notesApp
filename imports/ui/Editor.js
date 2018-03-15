import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import { Notes } from '../api/notes';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {
  ButtonStyle,
  EditorStyle,
  EditorStyleBody,
  EditorStyleTitle,
  EditorStyleMessage
} from '../styles/Styles';

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
        <EditorStyle>
          <EditorStyleTitle
            value={this.state.title}
            placeholder="Untitled Note"
            onChange={this.handleTitleChange}
          />
          <EditorStyleBody
            value={this.state.body}
            placeholder="Your note here"
            onChange={this.handleBodyChange}
          />
          <ButtonStyle onClick={this.handleDelete}>Delete Note</ButtonStyle>
        </EditorStyle>
      );
    } else {
      return (
        <EditorStyleMessage>
          {this.props.selectedNoteId
            ? 'Note not found.'
            : 'Pick or Create a note.'}
        </EditorStyleMessage>
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
