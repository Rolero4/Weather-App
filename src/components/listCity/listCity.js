import "./listCity.css";
import CityWidget from "../cityWidget/cityWidget";
import React, { Component } from "react";

class ListCity extends Component {
  constructor() {
    super();
    this.state = {
      citiesArray: [],
    };
  }

  render() {
    const data = this.props.data;
    const forecast = this.props.forecast;

    this.state.citiesArray.push({ data, forecast });
    const cities = [];

    for (let index = 0; index < this.state.citiesArray.length; index += 2) {
      cities.push(
        <CityWidget
          key={index}
          data={this.state.citiesArray[index].data}
          forecast={this.state.citiesArray[index].forecast}
        />
      );
    }
    return <div className="container">{cities}</div>;
  }
}

export default ListCity;
