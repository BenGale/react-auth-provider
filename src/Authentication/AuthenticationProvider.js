import { Component, Children, PropTypes } from 'react';

class AuthenticationProvider extends Component {
  getChildContext() {
    const { authenticationState } = this.props;

    return {
      isAuthenticated: authenticationState,
    };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

AuthenticationProvider.propTypes = {
  authenticationState: PropTypes.bool.isRequired,
};

AuthenticationProvider.childContextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AuthenticationProvider;
