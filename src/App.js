import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { isAuthenticated } from './Authentication/AuthenticationService';
import AuthenticationProvider from './Authentication/AuthenticationProvider';
import AuthenticatedComponent from './Authentication/AuthenticatedComponent';

import NavigationBar from './NavigationBar';
import ContentArea from './ContentArea';
import Insecure from './Insecure';
import Secure from './Secure';

const contentOptions = [{
  componentName: 'insecure',
  component: <Insecure />,
},{
  componentName: 'secure',
  component: <AuthenticatedComponent><Secure /></AuthenticatedComponent>,
}];

class App extends Component {
  constructor() {
    super();
    this.state = { activeComponent: 'insecure' };
  }

  render() {
    const { activeComponent } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NavigationBar
          active={activeComponent}
          onClick={(activeComponent) => this.setState({ activeComponent })}
        />
        <AuthenticationProvider getAuthenticationState={isAuthenticated}>
          <ContentArea
            contentOptions={contentOptions}
            selectedContentName={activeComponent}
          />
        </AuthenticationProvider>
      </div>
    );
  }
}

export default App;
