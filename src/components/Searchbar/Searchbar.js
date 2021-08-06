import React, { useEffect } from "react";
import { getWeather } from "../../apis/weather";

const Searchbar = () => {
  useEffect(() => {
    getWeather();
  }, []);

  return <input />;
};

export default Searchbar;
