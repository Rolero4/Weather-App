import "./cityWidget.css";

const CityWidget = () => {
  return (
    <div className="weather">
      <div className="basic">
        <div>
          <p className="city">Barcelona</p>
          <p className="weather-description">sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="current">
        <p className="temperature">18&deg;C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22&deg;C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">50%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
      <div className="week">
        <div className="day">
          <p className="week-parameter">Monday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
        <div className="day">
          <p className="week-parameter">Tuesday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
        <div className="day">
          <p className="week-parameter">Wednsday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
        <div className="day">
          <p className="week-parameter">Thursday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
        <div className="day">
          <p className="week-parameter">Friday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
        <div className="day">
          <p className="week-parameter">Saturday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
        <div className="day">
          <p className="week-parameter">Sunday</p>
          <img
            alt="weather"
            className="weekly-weather-icon"
            src="icons/01d.png"
          />
          <p className="week-parameter">20&deg;C</p>
        </div>
      </div>
    </div>
  );
};

export default CityWidget;
