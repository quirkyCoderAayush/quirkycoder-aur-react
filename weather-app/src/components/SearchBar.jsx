import React from 'react';
import './SearchBar.css';

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
