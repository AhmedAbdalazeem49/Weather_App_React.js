import React from "react";
import "./Weather.css";

const Weather = (props) => {
  return (
    <div>
      {props.country && (
        <div className="weather-container">
          {props.country && (
            <p className="country">
              Country: <span>{props.country}</span>
            </p>
          )}
          {props.city && (
            <p className="city">
              City: <span>{props.city}</span>
            </p>
          )}
          {props.temperature && (
            <p className="temp">
              Temperature: <span>{props.temperature} C</span>
            </p>
          )}
          {props.humidity && (
            <p className="humidity">
              Humidity: <span>{props.humidity}</span>
            </p>
          )}
          {props.description && (
            <p className="description">
              Description: <span>{props.description}</span>
            </p>
          )}
          {props.error && <p>Error: {props.error} </p>}
        </div>
      )}
    </div>
  );
};

export default Weather;
