import { Component, Children, PropTypes } from 'react';

class AuthenticatedComponent extends Component {
  componentWillMount() {
    const { authenticatedComponentWillMount } = this.context;

    authenticatedComponentWillMount();
  }

  render() {
    const { children, unauthorisedComponent = null } = this.props;
    const { isAuthenticated } = this.context;

    if (isAuthenticated) {
      return Children.only(children);
    }

    return unauthorisedComponent;
  }
};

AuthenticatedComponent.propTypes = {
  unauthorisedComponent: PropTypes.node,
};

AuthenticatedComponent.contextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedComponentWillMount: PropTypes.func,
}

export default AuthenticatedComponent;
