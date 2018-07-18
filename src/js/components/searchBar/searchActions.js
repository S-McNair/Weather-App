
// const axios = require('axios');

// const apiString = 'http://api.openweathermap.org/data/2.5/weather?q=';
// const apiKey = '&id=524901&APPID=b59d7a8d0632497f54ec5a572369bcd7';

// const foo = () => ({
//   type: 'FOO',
//   payload: new Promise()
// });

export function searchCity(cityName) {
  return {
    type: 'SEARCH_CITY',
    payload: { cityName }
  };
}

export function getWeather(
  apiName,
  tempF,
  pressure,
  humidity,
  lowTemp,
  highTemp,
  windSpeed,
  weatherReport,
  weatherReportDetailed
) {
  // export function getWeather(cityName, apiName, tempF, data) {
  // const apiCall = (apiString + cityName + apiKey);
  return {
    type: 'GET_WEATHER',
    payload: {
      apiName,
      tempF,
      pressure,
      humidity,
      lowTemp,
      highTemp,
      windSpeed,
      weatherReport,
      weatherReportDetailed
    }
  };
}
