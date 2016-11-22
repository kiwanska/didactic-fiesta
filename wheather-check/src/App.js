import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/style.css';

class App extends Component {

  state = {
    weather: {

    }
  }

  componentDidMount() {
    const data = fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ef88dd0d7db23ba7ca07e68793f8cd3')
      .then(response => response.json().then(weather => {
          this.setState({ weather });
        }).catch((err) => console.log('ERROR', err)));
  }


  render() {
    const { weather } = this.state;
    console.log(weather);
    const desc = (weather.weather) &&  weather.weather[1].description;
    const iconUrl = (weather.weather) &&  `http://openweathermap.org/img/w/${weather.weather[1].icon}.png`;
    const city = (weather.weather) &&  weather.name;

    console.log(city);

    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="react-logo" alt="logo" />
        </div>
        <div className="content">
          <p>Hello!</p>
          <p className="desc">Oh! You can experience {desc} in {city} now.</p>
          <img src={iconUrl}></img>
        </div>
      </div>
    );
  }
}

export default App;
