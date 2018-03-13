import React from 'react';
import PrivateHeader from './PrivateHeader';
import { PageContent } from '../styles/Styles';
import NoteList from './NoteList';
const Links = () => {
  return (
    <div>
      <PrivateHeader title="Boilerplate Stuff" />
      <PageContent>
        <NoteList />
      </PageContent>
    </div>
  );
};

export default Links;
