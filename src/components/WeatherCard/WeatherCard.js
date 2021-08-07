import React from "react";
import "./WeatherCard.scss";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h1>{weather.city}</h1>
      <div className="weather-card__main">
        <div className="weather-card__weather">
          <img src={weather.icon} alt={weather.weather} />
          <span>{weather.weather.toUpperCase()}</span>
        </div>
        <div className="weather-card__temp">
          <span>{weather.temp}°C</span>
          <span>Min: {weather.minTemp}°C</span>
          <span>Max: {weather.maxTemp}°C</span>
          <span>Sensación Termica: {weather.feelsLike}°C</span>
        </div>
      </div>
      <div className="weather-card__extra">
        <span>Presión: {weather.pressure} hPa</span>
        <span>Humedad: {weather.humidity}%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
