import { Component, Children, PropTypes } from 'react';

class AuthenticationProvider extends Component {
  getChildContext() {
    const { getAuthenticationState } = this.props;

    return {
      getAuthenticationState
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
  getAuthenticationState: PropTypes.func.isRequired,
};

export default AuthenticationProvider;
