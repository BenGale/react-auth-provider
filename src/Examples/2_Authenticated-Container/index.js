import React, { Component } from 'react';

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
        <h3>Authenticated Component Example</h3>
        <p>
          When you click to show the secure component, the whole container
          will hide, including the navigation.
        </p>
        <AuthenticationProvider authenticationState={authenticated}>
          <AuthenticatedContainer
            onAutheticatedComponentMount={() => console.log('MOUNTED')}
            unauthorisedComponent={() =>
              <Login login={() => this.setState({ authenticated: true })} />
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
