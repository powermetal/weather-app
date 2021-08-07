import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
  const history = useHistory();
  const [city, setCity] = useState();

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (city.length) {
      history.push(`/weather?q=${city}`);
    }
  };

  return (
    <form className="searchbar" onSubmit={(e) => onSubmitSearch(e)}>
      <input
        onChange={(e) => setCity(e.target.value.trim())}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
