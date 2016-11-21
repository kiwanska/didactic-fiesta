import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/style.css';

class App extends Component {

  state = {
  }


  render() {

    const { tasks } = this.state;

    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
        <div className="content">
          <p>Hello World</p>
        </div>
      </div>
    );
  }
}

export default App;
