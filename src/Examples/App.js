import React, { Component } from 'react';
import './App.css';

import NavigationBar from './Shared/NavigationBar';
import ContentArea from './Shared/ContentArea';
import SimpleSwitch from './1_Simple-Component-Switch';

class App extends Component {
  contentOptions = [{
    componentName: 'simple',
    displayName: 'Simple Switch',
    component: <SimpleSwitch />,
  }];

  constructor() {
    super();
    this.state = { activeComponent: 'simple' };
  }

  render() {
    const { activeComponent } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Authentication Spike</h2>
        </div>
        <NavigationBar
          contentOptions={this.contentOptions}
          active={activeComponent}
          onClick={(activeComponent) => this.setState({ activeComponent })}
        />
        <ContentArea
          contentOptions={this.contentOptions}
          selectedContentName={activeComponent}
        />
      </div>
    );
  }
}

export default App;
