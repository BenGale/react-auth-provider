import { Component, Children, PropTypes } from 'react';

class AuthenticatedContainer extends Component {
  constructor() {
    super();

    this.state = {
      authenticatedComponentMounted: false,
    };
  }

  getChildContext() {
    const authenticatedComponentWillMount = () => {
      this.setState({
        authenticatedComponentMounted: true,
      });
    };

    return {
      authenticatedComponentWillMount
    };
  }

  render() {
    const { children, unauthorisedComponent } = this.props;
    const { authenticatedComponentMounted } = this.state;
    const { isAuthenticated } = this.context;

    if (authenticatedComponentMounted && !isAuthenticated) {
      return unauthorisedComponent;
    }

    return Children.only(children);
  }
}

AuthenticatedContainer.propTypes = {
  unauthorisedComponent: PropTypes.node.isRequired,
};

AuthenticatedContainer.contextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

AuthenticatedContainer.childContextTypes = {
  authenticatedComponentWillMount: PropTypes.func.isRequired,
};

export default AuthenticatedContainer;
