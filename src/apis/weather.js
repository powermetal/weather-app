import axios from "axios";
import { DateTime } from "luxon";

const KEY = "0eccca835e90e18eb5e8dc96186f2864";

const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: KEY,
    units: "metric",
    lang: "ES",
  },
});

const toImg = (id) => {
  return `http://openweathermap.org/img/wn/${id}@4x.png`;
};

const toWeather = (c) => {
  return {
    city: c.name,
    weather: c.weather[0].description,
    temp: Math.round(c.main.temp),
    minTemp: Math.round(c.main.temp_min),
    maxTemp: Math.round(c.main.temp_max),
    feelsLike: Math.round(c.main.feels_like),
    pressure: c.main.pressure,
    humidity: c.main.humidity,
    icon: toImg(c.weather[0].icon),
  };
};

const isFirstWeatherFromDay = (idx) => idx % 8 === 0 && idx !== 0;
const formatDate = (dt) => DateTime.fromSeconds(dt).toFormat("EEE");

export const toForecast = (forecast) => {
  return forecast.list
    .filter((e, i) => isFirstWeatherFromDay(i))
    .map((e) => {
      return { date: formatDate(e.dt), ...toWeather(e) };
    });
};

export const getWeather = async (id) => {
  try {
    const [currentWeather, forecastWeather] = await axios.all([
      weather.get(`/weather?q=${id}`),
      weather.get(`/forecast?q=${id}`),
    ]);

    return {
      current: toWeather(currentWeather.data),
      forecast: toForecast(forecastWeather.data),
    };
  } catch (err) {
    return { error: err.response };
  }
};
