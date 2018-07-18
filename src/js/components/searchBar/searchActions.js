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
  latLong,
  pressure,
  humidity,
  lowTempF,
  highTempF,
  windSpeed,
  weatherReport,
  weatherDetails
) {
  return {
    type: 'GET_WEATHER',
    payload: {
      apiName,
      tempF,
      latLong,
      pressure,
      humidity,
      lowTempF,
      highTempF,
      windSpeed,
      weatherReport,
      weatherDetails
    }
  };
}
