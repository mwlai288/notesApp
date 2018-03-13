import React, { Component } from 'react';
import PrivateHeader from './PrivateHeader';
import { PageContent } from '../styles/Styles';
import NoteList from './NoteList';

class Dashboard extends Component {
  componentWillMount() {
    Session.set('selectedNoteId', this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Boilerplate Stuff" />
        <PageContent>
          <NoteList />
        </PageContent>
      </div>
    );
  }
}

export default Dashboard;
