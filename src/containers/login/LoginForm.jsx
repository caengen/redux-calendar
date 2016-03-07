import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    emailAddress: '',
    password: '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEmailChange: (e) => {
      dispatch(actions.setEmail(e.target.value));
    },

    handlePasswordChange: (e) => {
      dispatch(actions.setPassword(e.target.value));
    },

    handleSubmit: () => {},
  };
};

const _LoginForm = ({
  emailAddress,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
}) => {
  return (
    <form className="loginForm">
      <label htmlFor="loginEmail">Email Address</label>
      <input onChange={handleEmailChange} value={emailAddress} id="loginEmail" type="email" />
      <label htmlFor="loginPassword">Password</label>
      <input onChange={handlePasswordChange} value={password} id="loginPassword" type="password" />
      <button type="submit">Sign in</button>
    </form>
  );
};

export const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_LoginForm);
