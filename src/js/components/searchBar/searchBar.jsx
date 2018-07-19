import React from 'react';
import { getWeather, searchCity } from './searchActions';

const axios = require('axios');
const apiString = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&id=524901&APPID=b59d7a8d0632497f54ec5a572369bcd7';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTab = this.handleTab.bind(this);
  }

  handleSearch(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(searchCity(value));
  }

  handleClick() {
    const { cityName, dispatch } = this.props;
    const apiCall = (apiString + cityName + apiKey);
    document.getElementById('searchBar').value = '';
    document.getElementById('searchBar').focus();
    axios.get(apiCall)
      .then((res) => {

        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();
        const dateMDY = (month + '/' + day + '/' + year);

        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const seconds = new Date().getSeconds();
        const time = (hour + ':' + minute + ':' + seconds);

        const apiName = res.data.name;
        const tempK = res.data.main.temp;
        const tempF = (9 / 5 * (tempK - 273) + 32).toFixed(2) + '°F';
        const lat = res.data.coord.lat.toString();
        const long = res.data.coord.lon.toString();
        const latLong = 'Lat/Long: ' + (lat + ', ' + long);
        const pressure = res.data.main.pressure;
        const humidity = res.data.main.humidity.toString() + '%';
        const lowTempK = res.data.main.temp_min;
        const lowTempF = (9 / 5 * (lowTempK - 273) + 32).toFixed(2) + '°F';
        const highTempK = res.data.main.temp_max;
        const highTempF = (9 / 5 * (highTempK - 273) + 32).toFixed(2) + '°F';
        const windSpeed = res.data.wind.speed + 'mph';
        const iconID = res.data.weather[0].icon;
        const weatherImage = 'https://openweathermap.org/img/w/' + iconID + '.png';
        const weatherDetails = res.data.weather[0].description;
        // 9/5 * (temp - 273) + 32 converts Kelvin to Farenheit
        dispatch(getWeather(
          apiName,
          tempF,
          latLong,
          pressure,
          humidity,
          lowTempF,
          highTempF,
          windSpeed,
          weatherImage,
          weatherDetails,
          dateMDY,
          time
        ));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleTab(e) {
    const { dispatch } = this.props;
    const cityName = e.target.getAttribute('value');
    document.getElementById('searchBar').value = '';
    document.getElementById('searchBar').focus();
    const apiCall = (apiString + cityName + apiKey);
    axios.get(apiCall)
      .then((res) => {

        const year = new Date().getFullYear();
        const monthRaw = new Date().getMonth() + 1;
        const month = monthRaw < 10 ? '0' + monthRaw : monthRaw;
        const dayRaw = new Date().getDate();
        const day = dayRaw < 10 ? '0' + dayRaw : dayRaw;
        const dateMDY = (month + '/' + day + '/' + year);

        const hourRaw = new Date().getHours();
        const hour = hourRaw < 10 ? '0' + hourRaw : hourRaw;
        const minRaw = new Date().getMinutes()
        const minute = minRaw < 10 ? '0' + minRaw : minRaw;
        const secRaw = new Date().getSeconds();
        const seconds = secRaw < 10 ? '0' + secRaw : secRaw;
        const time = (hour + ':' + minute + ':' + seconds);

        const apiName = res.data.name;
        const tempK = res.data.main.temp;
        const tempF = (9 / 5 * (tempK - 273) + 32).toFixed(2) + '°F';
        const lat = res.data.coord.lat.toString();
        const long = res.data.coord.lon.toString();
        const latLong = 'Lat/Long: ' + (lat + ', ' + long);
        const pressure = res.data.main.pressure;
        const humidity = res.data.main.humidity.toString() + '%';
        const lowTempK = res.data.main.temp_min;
        const lowTempF = (9 / 5 * (lowTempK - 273) + 32).toFixed(2) + '°F';
        const highTempK = res.data.main.temp_max;
        const highTempF = (9 / 5 * (highTempK - 273) + 32).toFixed(2) + '°F';
        const windSpeed = res.data.wind.speed + 'mph';
        const iconID = res.data.weather[0].icon;
        const weatherImage = 'http://openweathermap.org/img/w/' + iconID + '.png';
        const weatherDetails = res.data.weather[0].description;
        // 9/5 * (temp - 273) + 32 converts Kelvin to Farenheit
        dispatch(getWeather(
          apiName,
          tempF,
          latLong,
          pressure,
          humidity,
          lowTempF,
          highTempF,
          windSpeed,
          weatherImage,
          weatherDetails,
          dateMDY,
          time
        ));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { cityName } = this.props;
    const searchTab = 'searchTabs border border-dark rounded-top bg-primary';
    const tabLink = 'nav-link text-white';
    return (
      <div id='enclosing-tag' >

        <div className='d-flex flex-row'>
          <div id={'San Diego'} className={searchTab}><a className={tabLink} href='#' value={'San Diego'} onClick={this.handleTab} >San Diego</a></div>
          <div id={'Copenhagen'} className={searchTab}><a className={tabLink} href='#' value={'Copenhagen'} onClick={this.handleTab} >Copenhagen</a></div>
          <div id={'Budapest'} className={searchTab}><a className={tabLink} href='#' value={'Budapest'} onClick={this.handleTab} >Budapest</a></div>
          <div id={'Peabody'} className={searchTab}><a className={tabLink} href='#' value={'Peabody'} onClick={this.handleTab} >Peabody</a></div>
        </div>

        <div className='input-group' >
          <input id='searchBar' type='text' className='form-control' placeholder='Enter City Name Here' value={cityName} onChange={this.handleSearch} />
          <button type='button' className='btn btn-secondary input-group-btn' onClick={this.handleClick} >Go!</button>
        </div>

      </div>
    );
  }
}
