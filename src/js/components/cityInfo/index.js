import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    apiName: store.cityInput.apiName,
    tempF: store.cityInput.tempF,
    latLong: store.cityInput.latLong,
    pressure: store.cityInput.pressure,
    humidity: store.cityInput.humidity,
    lowTempF: store.cityInput.lowTempF,
    highTempF: store.cityInput.highTempF,
    windSpeed: store.cityInput.windSpeed,
    weatherReport: store.cityInput.weatherReport,
    weatherDetails: store.cityInput.weatherDetails
  };
}

export default connect(mapStoreToProps)(CityInfo);
