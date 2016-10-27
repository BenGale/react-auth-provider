import React, { Component } from 'react';

import {
  AuthenticationProvider, AuthenticatedComponent
} from '../../Authentication';

import NavigationBar from '../Shared/NavigationBar';
import ContentArea from '../Shared/ContentArea';
import Insecure from '../Shared/Insecure';
import Secure from '../Shared/Secure';
import Login from '../Shared/Login';

class SimpleComponentSwitch extends Component {
  contentOptions = [{
    componentName: 'insecure',
    displayName: 'Insecure Component',
    component: <Insecure />,
  },{
    componentName: 'secure',
    displayName: 'Secure Component',
    component: (
      <AuthenticatedComponent
        unauthorisedComponent={
          <Login login={() => this.setState({ authenticated: true })} />
        }
      >
        <Secure logout={() => this.setState({ authenticated: false })} />
      </AuthenticatedComponent>
    ),
  }];

  constructor() {
    super();
    this.state = { activeComponent: 'insecure', authenticated: false };
  }

  render() {
    const { activeComponent, authenticated } = this.state;

    return (
      <div>
        <h3>Simple Switch Component Example</h3>
        <NavigationBar
          contentOptions={this.contentOptions}
          active={activeComponent}
          onClick={(activeComponent) => this.setState({ activeComponent })}
        />
        <AuthenticationProvider authenticationState={authenticated}>
          <ContentArea
            contentOptions={this.contentOptions}
            selectedContentName={activeComponent}
          />
        </AuthenticationProvider>
      </div>
    );
  }
}

export default SimpleComponentSwitch;
