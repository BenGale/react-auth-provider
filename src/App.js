import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import ContentArea from './ContentArea';

const contentOptions = [{
  componentName: 'insecure',
  component: require('./Insecure').default,
},{
  componentName: 'secure',
  component: require('./Secure').default,
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
        <ContentArea
          contentOptions={contentOptions}
          selectedContentName={activeComponent}
        />
      </div>
    );
  }
}

export default App;
