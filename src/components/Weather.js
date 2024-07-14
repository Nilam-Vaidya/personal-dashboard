import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading weather...</p>;

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      {weather && (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
