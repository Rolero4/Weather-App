import React from "react";
import { useState } from "react";
import { WeatherApiKey, WeatherApiUrl } from "./api";
import CityWidget from "./components/cityWidget/cityWidget";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WeatherApiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${WeatherApiKey}`
    );
    const forecastFetch = fetch(
      `${WeatherApiUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${WeatherApiKey}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <div className="container-test">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <CityWidget />
      <CityWidget />
    </div>
  );
}

export default App;
