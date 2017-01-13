import React from 'react';

const unauthorisedComponentWrapper = (Component) => {
  class UnauthorisedComponent extends Component {
    componentDidMount() {
      const { onMount } = this.props;
      onMount();
    }

    render() {
      const { onMount, ...otherProps } = this.props;
      return <Component {...otherProps} />;
    }
  };

  return UnauthorisedComponent;
}

export default unauthorisedComponentWrapper;