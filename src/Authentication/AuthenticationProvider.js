import { Component, Children, PropTypes } from 'react';

class AuthenticationProvider extends Component {
  getChildContext() {
    const { getAuthenticationState } = this.props;

    return {
      isAuthenticated: getAuthenticationState()
    };
  }

  render() {
    const { children } = this.props;

    return Children.only(children);
  }
}

AuthenticationProvider.propTypes = {
  getAuthenticationState: PropTypes.func.isRequired,
};

AuthenticationProvider.childContextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AuthenticationProvider;
