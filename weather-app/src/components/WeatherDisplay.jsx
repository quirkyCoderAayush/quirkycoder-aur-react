import React from 'react'

function WeatherDisplay({weather}) {
  return (
    <div className='weather'>
        <h2>{weather.name}, {weather.country}</h2>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
        <p>{weather.temp}</p>
        <p>{weather.description}</p>
        <p>Humidity: {weather.humidity}</p>
    </div>
  )
}

export default WeatherDisplay