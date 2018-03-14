import React, { Component } from 'react';
import PrivateHeader from './PrivateHeader';
import { PageContent } from '../styles/Styles';
import NoteList from './NoteList';
import Editor from './Editor';

class Dashboard extends Component {
  componentWillMount() {
    Session.set('selectedNoteId', this.props.match.params.id);
  }

  componentWillUpdate() {
    if (!Meteor.userId()) {
      History.replace('/');
    }
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Boilerplate Stuff" />
        <PageContent>
          <NoteList />
          <Editor />
        </PageContent>
      </div>
    );
  }
}

export default Dashboard;
