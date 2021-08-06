import axios from "axios";

const KEY = "0eccca835e90e18eb5e8dc96186f2864";

const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: KEY,
  },
});

export const getWeather = async () => {
  try {
    const results = await weather.get("/weather?q=london");
    console.log(results);
    return results.data;
  } catch (err) {
    console.log(err);
  }
};
