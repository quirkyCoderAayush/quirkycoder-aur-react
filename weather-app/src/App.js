import React, { useState, useEffect } from 'react';
import './App.css';
import { WeatherDisplay, SearchBar, ErrorDisplay, Loader } from './components/index';

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [backgroundClass, setBackgroundClass] = useState('default-bg')

  const API_KEY = '2431b9b7fff28cda67e4fd0e450844e3'

  // Update background based on weather condition
  useEffect(() => {
    if (weather) {
      const condition = weather.description.toLowerCase();
      if (condition.includes('cloud')) {
        setBackgroundClass('cloudy-bg');
      } else if (condition.includes('rain') || condition.includes('drizzle')) {
        setBackgroundClass('rainy-bg');
      } else if (condition.includes('snow')) {
        setBackgroundClass('snowy-bg');
      } else if (condition.includes('clear')) {
        setBackgroundClass('clear-bg');
      } else if (condition.includes('thunder') || condition.includes('storm')) {
        setBackgroundClass('stormy-bg');
      } else {
        setBackgroundClass('default-bg');
      }
    } else {
      setBackgroundClass('default-bg');
    }
  }, [weather]);

  const fetchWeather = async() => {
    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      if (!response.ok) {
        throw new Error('City not found')
      }
      const data = await response.json()
      setWeather({
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
      })
    }
    catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className={`App ${backgroundClass}`}>
      <div className="content-container">
        <h1>Weather App</h1>
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
        {loading && <Loader />}
        {error && <ErrorDisplay error={error} />}
        {weather && <WeatherDisplay weather={weather} />}
        <div className="footer">
          <p>Made with ❤️ by QuirkyCoder</p>
          <p>Powered by OpenWeatherMap</p>
        </div>
      </div>
    </div>
  );
}

export default App;
