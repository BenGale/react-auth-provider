import { Component, Children } from 'react';
import PropTypes from 'prop-types';

class AuthenticationProvider extends Component {
  getChildContext() {
    const { authenticationState, onAuthenticatedMount } = this.props;

    return {
      isAuthenticated: authenticationState,
      onAuthenticatedMount,
    };
  }

  render() {
    const { children } = this.props;

    return Children.only(children);
  }
}

AuthenticationProvider.propTypes = {
  authenticationState: PropTypes.bool.isRequired,
  onAuthenticatedMount: PropTypes.func,
};

AuthenticationProvider.childContextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onAuthenticatedMount: PropTypes.func,
};

export default AuthenticationProvider;
