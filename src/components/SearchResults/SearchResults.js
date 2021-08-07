import React, { useEffect, useState } from "react";
import qs from "qs";
import { getWeather } from "../../apis/weather";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./SearchResults.scss";
import errorImage from "../../images/error.png";
import Forecast from "../Forecast/Forecast";

const SearchResults = (props) => {
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const getCityData = async () => {
      const query = qs.parse(props.location.search, {
        ignoreQueryPrefix: true,
      });
      const results = await getWeather(query.q);
      setSearchResults(results);
    };

    getCityData();
    return () => setSearchResults(undefined);
  }, [props.location.search]);

  const renderCard = () => {
    if (searchResults && searchResults.error) {
      return (
        <div className="message">
          <img src={errorImage} alt="error" />
          <p>No se han encontrado resultados para su busqueda.</p>
        </div>
      );
    }
    if (searchResults) {
      return (
        <div className="search-results">
          <WeatherCard weather={searchResults.current} />
          <Forecast forecast={searchResults.forecast} />
        </div>
      );
    } else {
      return <div className="message">Loading...</div>;
    }
  };

  return renderCard();
};

export default SearchResults;
