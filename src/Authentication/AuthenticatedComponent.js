import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

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
      return Children.only(children);
    }

    return unauthorisedComponent ? unauthorisedComponent : <div></div>;
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
