import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/style.css';

class App extends Component {

  state = {
  }

  fetchData = () => {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ef88dd0d7db23ba7ca07e68793f8cd3', {'mode': 'no-cors'}).then(response =>
        response.json().then(json => {
          return json;
        })
      );
  }

  componentDidMount() {
    // const data = fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ef88dd0d7db23ba7ca07e68793f8cd3', {'mode': 'no-cors'})
    //   .then(response => response.json().then(json => { return json});

      const data = this.fetchData();
      console.log(data);
  }


  render() {

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
