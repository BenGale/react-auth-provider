import React, { Component } from 'react';

const unauthorisedComponentWrapper = (UnauthorisedComponent) => {
  class UnauthorisedComponentWrapper extends Component {
    componentDidMount() {
      const { onMount } = this.props;
      onMount();
    }

    render() {
      const { onMount, ...otherProps } = this.props;
      return <UnauthorisedComponent {...otherProps} />;
    }
  };

  return UnauthorisedComponentWrapper;
}

export default unauthorisedComponentWrapper;
