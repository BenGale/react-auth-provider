import React, { Component, Children, PropTypes } from 'react';

class AuthenticatedComponent extends Component {
  componentWillMount() {
    const {
      authenticatedComponentWillMount = () => {}
    } = this.context;

    authenticatedComponentWillMount();
  }

  render() {
    const { children, unauthorisedComponent } = this.props;
    const { isAuthenticated } = this.context;

    if (isAuthenticated) {
      return children;
    }

    return unauthorisedComponent ? unauthorisedComponent : <div></div>;
  }
};

AuthenticatedComponent.propTypes = {
  unauthorisedComponent: PropTypes.node,
};

AuthenticatedComponent.defaultProps = {
  isAuthenticated: false,  
};

AuthenticatedComponent.contextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedComponentWillMount: PropTypes.func,
};

export default AuthenticatedComponent;
