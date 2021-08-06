import axios from "axios";

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
    temp: c.main.temp,
    minTemp: c.main.temp_min,
    maxTemp: c.main.temp_max,
    feelsLike: c.main.feels_like,
    pressure: c.main.pressure,
    humidity: c.main.humidity,
    icon: toImg(c.weather[0].icon),
  };
};

export const getWeather = async (id) => {
  try {
    const results = await weather.get(`/weather?q=${id}`);
    return toWeather(results.data);
  } catch (err) {
    console.log(err);
  }
};
