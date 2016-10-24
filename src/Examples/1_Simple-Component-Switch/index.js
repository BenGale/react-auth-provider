import React, { Component } from 'react';

import {
  isAuthenticated, login, logout
} from '../Shared/AuthenticationService';
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
          <Login login={() => {
            login();
            this.forceUpdate()}} // Bit hacky, would be better IRL
          />
        }
      >
        <Secure
          logout={() => {
            logout();
            this.forceUpdate()}} // Bit hacky, would be better IRL
        />
      </AuthenticatedComponent>
    ),
  }];

  constructor() {
    super();
    this.state = { activeComponent: 'insecure' };
  }

  render() {
    const { activeComponent } = this.state;

    return (
      <div>
        <h3>Simple Switch Component Example</h3>
        <NavigationBar
          contentOptions={this.contentOptions}
          active={activeComponent}
          onClick={(activeComponent) => this.setState({ activeComponent })}
        />
        <AuthenticationProvider getAuthenticationState={isAuthenticated}>
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
