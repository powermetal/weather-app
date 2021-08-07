import React from "react";
import "./Forecast.scss";

const Forecast = ({ forecast }) => {
  const renderForecast = () => {
    return forecast.map((d) => {
      return (
        <div key={d.date} className="forecast__item">
          <span className="forecast__date">{d.date}</span>
          <img src={d.icon} alt={d.weather} />
          <span className="forecast__temp">{d.temp}°C</span>
        </div>
      );
    });
  };

  return <div className="forecast">{renderForecast()}</div>;
};

export default Forecast;
