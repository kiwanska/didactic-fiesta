import React, { Component } from 'react';

function Response({ weather }) {

    const desc = weather.weather[0].description;
    const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const city = weather.name;
    const tempMin = weather.main.temp_min;
    const tempMax = weather.main.temp_max;
    const humidity = weather.main.humidity;
    console.log(city);
    console.log(weather);

    return (
        <div className="content">
          <p className="weather-desc">Oh!</p>
          <p className="weather-desc">
            You can experience <span>{desc}</span> in <span>{city}</span> now.
          </p>
          <img className="weather-icon" src={iconUrl} alt={desc} ></img>
          <p className="weather-details">
            temperature betweeen <span>{tempMin}&#8451;</span> and <span>{tempMax}&#8451;</span>
          </p>
          <p className="weather-details">
            humidity around <span>{humidity}%</span>
          </p>
        </div>
    );
}

export default Response;






