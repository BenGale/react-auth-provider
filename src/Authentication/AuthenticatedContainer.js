import { Component, Children, PropTypes } from 'react';

class AuthenticatedContainer extends Component {
  constructor(props) {
    super(props);
    const notifyMount = props.onAutheticatedComponentMount || (() => {});

    this.state = {
      authenticatedComponentMounted: false,
      notifyMount,
    };
  }

  getChildContext() {
    const { notifyMount } = this.state;
    const authenticatedComponentWillMount = () => {
      this.setState({
        authenticatedComponentMounted: true,
      });
      notifyMount();
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
  onAutheticatedComponentMount: PropTypes.func,
};

AuthenticatedContainer.contextTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

AuthenticatedContainer.childContextTypes = {
  authenticatedComponentWillMount: PropTypes.func.isRequired,
};

export default AuthenticatedContainer;
