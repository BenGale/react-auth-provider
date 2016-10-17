import { Component, Children, PropTypes } from 'react';

class AuthenticatedComponent extends Component {
  render() {
    const { children, unauthorisedComponent } = this.props;
    const { getAuthenticationState } = this.context;

    if (getAuthenticationState()) {
      return Children.only(children);
    } else {
      return unauthorisedComponent;
    }
  }
};

AuthenticatedComponent.propTypes = {
  unauthorisedComponent: PropTypes.node.isRequired,
};

AuthenticatedComponent.contextTypes = {
  getAuthenticationState: PropTypes.func,
}

export default AuthenticatedComponent;
