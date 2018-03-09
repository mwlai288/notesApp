import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import {
  BackgroundStyle,
  BoxView,
  FormView,
  ButtonStyle
} from '../styles/Styles';

// use setState to update. takes an object for you to update the state properties.

class Signup extends Component {
  state = {
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if (password.length < 9) {
      return this.setState({ error: 'Password must more 8 characters long' });
    }
    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  };
  render() {
    return (
      <BackgroundStyle>
        <BoxView>
          <h1>Signup a new account</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}
          <FormView onSubmit={this.onSubmit} noValidate>
            <input type="email" ref="email" placeholder="Email" />
            <input type="password" ref="password" placeholder="Password" />
            <ButtonStyle>Create Account</ButtonStyle>
          </FormView>

          <Link to="/">Already have an account?</Link>
        </BoxView>
      </BackgroundStyle>
    );
  }
}

export default Signup;
