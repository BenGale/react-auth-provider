import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import unauthorisedComponentWrapper from './unauthorisedComponentWrapper';

class AuthenticatedContainer extends Component {
  constructor(props, context) {
    super(props);
    const notifyMount =
      props.onAutheticatedComponentMount ||
      context.onAuthenticatedMount ||
      (() => {});
    this.state = {
      notifyMount,
    };
    this.authenticatedComponentMounted = false;
  }

  getChildContext() {
    const { notifyMount } = this.state;
    const { isAuthenticated } = this.context;

    const authenticatedComponentWillMount = () => {
      this.authenticatedComponentMounted = true;
      this.forceUpdate();
      if (!isAuthenticated) {
        notifyMount();
      }
    };

    return {
      authenticatedComponentWillMount
    };
  }

  render() {
    const { children, unauthorisedComponent } = this.props;
    const { isAuthenticated } = this.context;
    if (this.authenticatedComponentMounted && !isAuthenticated) {
      const Unauthorised = unauthorisedComponentWrapper(unauthorisedComponent);
      return (
        <Unauthorised onMount={() => { this.authenticatedComponentMounted = false; }} />
      );
    }

    return Children.only(children);
  }
}

AuthenticatedContainer.propTypes = {
  unauthorisedComponent: PropTypes.any,
  onAutheticatedComponentMount: PropTypes.func,
};

AuthenticatedContainer.contextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onAuthenticatedMount: PropTypes.func,
}

AuthenticatedContainer.childContextTypes = {
  authenticatedComponentWillMount: PropTypes.func.isRequired,
};

export default AuthenticatedContainer;
