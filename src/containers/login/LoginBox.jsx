import React from 'react';
import { connect } from 'react-redux';
import { LoginDescription } from './LoginDescription.jsx';
import { LoginForm } from './LoginForm.jsx';

const mapDispatchToProps = () => {
  return {
    onLoginSubmit: () => {},
  };
};

const _LoginBox = ({ onLoginSubmit }) => {
  return (
    <div className="loginBox">
      <LoginDescription />
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export const LoginBox = connect(
  undefined,
  mapDispatchToProps
)(_LoginBox);
