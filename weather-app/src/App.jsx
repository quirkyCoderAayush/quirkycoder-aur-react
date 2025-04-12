import React, { useState, useEffect } from 'react';
import './App.css';
import { WeatherDisplay, SearchBar, ErrorDisplay, Loader } from './components/index';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [backgroundClass, setBackgroundClass] = useState('default-bg')
  const [particlesConfig, setParticlesConfig] = useState(null)

  const API_KEY = '2431b9b7fff28cda67e4fd0e450844e3'

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Update background and particles based on weather condition
  useEffect(() => {
    if (weather) {
      const condition = weather.description.toLowerCase();
      
      if (condition.includes('cloud')) {
        setBackgroundClass('cloudy-bg');
        setParticlesConfig(cloudyParticles);
      } else if (condition.includes('rain') || condition.includes('drizzle')) {
        setBackgroundClass('rainy-bg');
        setParticlesConfig(rainyParticles);
      } else if (condition.includes('snow')) {
        setBackgroundClass('snowy-bg');
        setParticlesConfig(snowyParticles);
      } else if (condition.includes('clear')) {
        setBackgroundClass('clear-bg');
        setParticlesConfig(clearParticles);
      } else if (condition.includes('thunder') || condition.includes('storm')) {
        setBackgroundClass('stormy-bg');
        setParticlesConfig(stormyParticles);
      } else {
        setBackgroundClass('default-bg');
        setParticlesConfig(defaultParticles);
      }
    } else {
      setBackgroundClass('default-bg');
      setParticlesConfig(defaultParticles);
    }
  }, [weather]);

  const fetchWeather = async() => {
    // Your existing fetchWeather code
    // ...
  }

  return (
    <div className={`App ${backgroundClass}`}>
      {particlesConfig && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      )}
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

// Particle configurations
const defaultParticles = {
  background: {
    color: {
      value: "#4b6cb7",
    },
  },
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
};

const rainyParticles = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "line",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      enable: true,
      speed: 15,
      direction: "bottom",
      straight: true,
    },
  },
};

const snowyParticles = {
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.7,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
};

const cloudyParticles = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 50, max: 100 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "right",
      random: false,
      straight: true,
      outModes: {
        default: "out",
      },
    },
  },
};

const clearParticles = {
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: "#ffff00",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
};

const stormyParticles = {
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "line",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      enable: true,
      speed: 10,
      direction: "bottom",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
};

export default App;
