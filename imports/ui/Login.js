import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import {
  BackgroundStyle,
  BoxView,
  ButtonStyle,
  FormView
} from '../styles/Styles';

class Login extends Component {
  state = {
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
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
          <h1>BOILERPLATE STUFF</h1>
          {this.state.error ? <p>{this.state.error}</p> : null}

          <FormView onSubmit={this.onSubmit} noValidate>
            <input type="email" ref="email" placeholder="Email" />
            <input type="password" ref="password" placeholder="Password" />
            <ButtonStyle>Login</ButtonStyle>
          </FormView>

          <Link to="/signup">Don't have an account?</Link>
        </BoxView>
      </BackgroundStyle>
    );
  }
}

export default Login;
