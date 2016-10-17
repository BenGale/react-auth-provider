import React, { Component, Children, PropTypes } from 'react';

class AuthenticatedComponent extends Component {
  render() {
    const { children } = this.props;
    const { getAuthenticationState } = this.context;

    if (getAuthenticationState()) {
      return Children.only(children);
    } else {
      return <p>{'You must login!'}</p>;
    }
  }
};

AuthenticatedComponent.contextTypes = {
  getAuthenticationState: PropTypes.func,
}

export default AuthenticatedComponent;
