import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const Login = ({ login }) => (
  <div className="login">
    <p>You must be logged in...</p>
    <button
      type="button"
      onClick={() => login()}
    >
      Login!
    </button>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
