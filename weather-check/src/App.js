import React, { Component } from 'react';
import Response from './Response.js';
import Form from './Form.js';
import logo from './logo.svg';
import '../css/style.css';

class App extends Component {

  state = {
    weather: {

    }
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=ceaa19ef895b027145445d783601206e')
      .then(response => response.json().then(weather => {
          this.setState({ weather });
        }).catch((err) => console.log('ERROR', err)));
  }

  checkWeather = (cityName) => console.log(cityName);

  render() {
    const { weather } = this.state;
    console.log(weather);

    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
        <div className="content">
          <p>Hello!</p>
          <Form onFormSubmit={this.checkWeather} />
          <Response weather={weather} />
        </div>
      </div>
    );
  }
}

export default App;
