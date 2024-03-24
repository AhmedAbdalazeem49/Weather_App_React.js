import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "783613476b438fd604b5a35bf6f1ff01";
class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    ).then((data) => data.json());

    console.log(apiData);

    this.setState({
      temperature: apiData.main.temp,
      city: apiData.name,
      country: apiData.sys.country,
      humidity: apiData.main.humidity,
      description: apiData.weather[0].description,
      error: "",
    });
    e.target.elements.city.value = "";
    e.target.elements.country.value = "";
  };

  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
