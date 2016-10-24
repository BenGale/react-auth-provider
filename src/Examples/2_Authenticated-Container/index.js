import React, { Component } from 'react';

import {
  isAuthenticated, login, logout
} from '../Shared/AuthenticationService';
import {
  AuthenticationProvider, AuthenticatedComponent, AuthenticatedContainer,
} from '../../Authentication';

import NavigationBar from '../Shared/NavigationBar';
import ContentArea from '../Shared/ContentArea';
import Insecure from '../Shared/Insecure';
import Secure from '../Shared/Secure';
import Login from '../Shared/Login';

class AuthenticatedContainerExample extends Component {
  contentOptions = [{
    componentName: 'insecure',
    displayName: 'Insecure Component',
    component: <Insecure />,
  },{
    componentName: 'secure',
    displayName: 'Secure Component',
    component: (
      <AuthenticatedComponent>
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
        <h3>Authenticated Component Example</h3>
        <p>
          When you click to show the secure component, the whole container
          will hide, including the navigation.
        </p>
        <AuthenticationProvider getAuthenticationState={isAuthenticated}>
          <AuthenticatedContainer
            unauthorisedComponent={
              <Login login={() => {
                login();
                this.forceUpdate()}} // Bit hacky, would be better IRL
              />
            }
          >
            <div>
              <NavigationBar
                contentOptions={this.contentOptions}
                active={activeComponent}
                onClick={(activeComponent) => this.setState({ activeComponent })}
              />
              <p>This will hide too...</p>
              <ContentArea
                contentOptions={this.contentOptions}
                selectedContentName={activeComponent}
              />
            </div>
          </AuthenticatedContainer>
        </AuthenticationProvider>
      </div>
    );
  }
}

export default AuthenticatedContainerExample;
