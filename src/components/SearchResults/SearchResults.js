import React, { useEffect, useState } from "react";
import qs from "qs";
import { getWeather } from "../../apis/weather";

const SearchResults = (props) => {
  const [searchResults, setSearchResults] = useState();

  const getCityData = async () => {
    const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
    const results = await getWeather(query.q);
    setSearchResults(results);
  };

  useEffect(() => {
    getCityData();
  }, [props.location.search]);

  return <div></div>;
};

export default SearchResults;
