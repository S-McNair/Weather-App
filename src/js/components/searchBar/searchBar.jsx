import React from 'react';
import { getWeather, searchCity } from './searchActions';

const axios = require('axios');
const apiString = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&id=524901&APPID=b59d7a8d0632497f54ec5a572369bcd7';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    // console.log(this.props);
    dispatch(searchCity(value));
  }

  handleClick() {
    const { cityName, dispatch } = this.props;
    const apiCall = (apiString + cityName + apiKey);
    document.getElementById('searchBar').value = '';

    axios.get(apiCall)
      .then((res) => {
        // const data = res.data;
        const apiName = res.data.name;
        const tempK = res.data.main.temp;
        const tempF = (9 / 5 * (tempK - 273) + 32).toFixed(2) + '°F';
        const pressure = res.data.main.pressure;
        const humidity = res.data.main.humidity.toString() + '%';
        const lowTempK = res.data.main.temp_min;
        const lowTempF = (9 / 5 * (lowTempK - 273) + 32).toFixed(2) + '°F';
        const highTempK = res.data.main.temp_max;
        const highTempF = (9 / 5 * (highTempK - 273) + 32).toFixed(2) + '°F';
        const windSpeed = res.data.wind.speed + 'mph';
        const weatherReport = res.data.weather.main;
        const weatherReportDetailed = res.data.weather.description;
        // 9/5 * (temp - 273) + 32 converts Kelvin to Farenheit

        // console.log(apiName, tempF);
        // console.log(apiCall);
        // dispatch(getWeather(apiName, tempF));
        dispatch(getWeather(
          apiName,
          tempF,
          pressure,
          humidity,
          lowTempF,
          highTempF,
          windSpeed,
          weatherReport,
          weatherReportDetailed
        ));
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(dispatch(getWeather(apiName, tempF, pressure, humidity, lowTempF, highTempF, windSpeed, weatherReport, weatherReportDetailed)));
    // dispatch(getWeather(apiName, tempF, pressure, humidity, lowTempF, highTempF, windSpeed, weatherReport, weatherReportDetailed));
    // dispatch(getWeather(cityName, apiName, tempF, data));
  }

  render() {
    const { cityName, searchHistory } = this.props;
    const searchTab = 'searchTabs border border-dark rounded-top bg-primary';
    const tabLink = 'nav-link text-white';
    return (
      <div id='enclosing-tag' >

        <div className='d-flex flex-row'>
          <div className={searchTab}><a className={tabLink} href='#' >San Diego</a></div>
          <div className={searchTab}><a className={tabLink} href='#' >Copenhagen</a></div>
          <div className={searchTab}><a className={tabLink} href='#' >Budapest</a></div>
          <div className={searchTab}><a className={tabLink} href='#' >Peabody</a></div>
        </div>

        <div className='input-group' >
          <input id='searchBar' type='text' className='form-control' placeholder='Enter City Name Here' value={ cityName } onChange={ this.handleSearch } />
          <button type='button' className='btn btn-secondary input-group-btn' onClick={ this.handleClick } >Go!</button>
        </div>

      </div>
    );
  }
}
