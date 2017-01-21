import React, { Component, Children, PropTypes } from 'react';
import unauthorisedComponentWrapper from './unauthorisedComponentWrapper';

class AuthenticatedContainer extends Component {
  constructor(props) {
    super(props);
    const notifyMount = props.onAuthenticatedComponentMount || (() => {});

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

    return children;
  }
}

AuthenticatedContainer.propTypes = {
  unauthorisedComponent: PropTypes.any,
  onAuthenticatedComponentMount: PropTypes.func,
};

AuthenticatedContainer.contextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

AuthenticatedContainer.childContextTypes = {
  authenticatedComponentWillMount: PropTypes.func.isRequired,
};

export default AuthenticatedContainer;
