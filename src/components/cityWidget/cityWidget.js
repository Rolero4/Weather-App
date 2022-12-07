import "./cityWidget.css";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CityWidget = ({ data, forecast }) => {
  const currentWeekDay = new Date().getDay();
  const futureDays = weekDays
    .slice(currentWeekDay, weekDays.length)
    .concat(weekDays.slice(0, currentWeekDay));

  return (
    <div className="weather">
      <div className="basic">
        <div>
          <p className="city">{data.city.split(", ")[0]}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="current">
        <p className="temperature">{data.main.temp.toFixed()}&deg;C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {data.main.feels_like.toFixed()}&deg;C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {data.wind.speed.toFixed()} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
      <div className="week">
        <div className="day">
          <p className="week-parameter">{futureDays[0]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[0].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[0].main.temp.toFixed()}&deg;C
          </p>
        </div>
        <div className="day">
          <p className="week-parameter">{futureDays[1]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[1].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[1].main.temp.toFixed()}&deg;C
          </p>
        </div>
        <div className="day">
          <p className="week-parameter">{futureDays[2]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[2].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[2].main.temp.toFixed()}&deg;C
          </p>
        </div>
        <div className="day">
          <p className="week-parameter">{futureDays[3]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[3].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[3].main.temp.toFixed()}&deg;C
          </p>
        </div>
        <div className="day">
          <p className="week-parameter">{futureDays[4]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[4].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[4].main.temp.toFixed()}&deg;C
          </p>
        </div>
        <div className="day">
          <p className="week-parameter">{futureDays[5]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[5].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[5].main.temp.toFixed()}&deg;C
          </p>
        </div>
        <div className="day">
          <p className="week-parameter">{futureDays[6]}</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src={`icons/${forecast.list[6].weather[0].icon.replace(
              "n",
              "d"
            )}.png`}
          />
          <p className="week-parameter">
            {forecast.list[6].main.temp.toFixed()}&deg;C
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityWidget;
