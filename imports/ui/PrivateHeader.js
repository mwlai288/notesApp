import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Header, LogoutButton, Title } from '../styles/Styles';
import { withTracker } from 'meteor/react-meteor-data';

export const PrivateHeader = ({ title }) => {
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

export default withTracker(() => {
  return {
    logOut: () => Accounts.logout()
  };
})(PrivateHeader);
