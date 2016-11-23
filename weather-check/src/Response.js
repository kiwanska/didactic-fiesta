import React, { Component } from 'react';

class Response extends Component {

  render() {
    const { weather } = this.props;
    console.log(weather);
    const desc = (weather.weather) &&  weather.weather[1].description;
    const iconUrl = (weather.weather) &&  `http://openweathermap.org/img/w/${weather.weather[1].icon}.png`;
    const city = (weather.weather) &&  weather.name;

    console.log(city);

    return (
        <div className="content">
          <p className="weather-desc">Oh!</p>
          <p className="weather-desc">You can experience <span>{desc}</span> in <span>{city}</span> now.</p>
          <img className="weather-icon" src={iconUrl} alt={desc} ></img>
        </div>
    );
  }
}

export default Response;






