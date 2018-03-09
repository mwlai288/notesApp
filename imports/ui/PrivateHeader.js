import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Header, LogoutButton, Title } from '../styles/Styles';

const PrivateHeader = ({ title }) => {
  logOut = () => {
    Accounts.logout();
  };

  return (
    <Header>
      <Title>{title}</Title>
      <LogoutButton onClick={this.logOut}>Logout</LogoutButton>
    </Header>
  );
};

export default PrivateHeader;
