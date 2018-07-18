import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
  return {
    apiName: store.cityInput.apiName,
    searchHistory: store.cityInput.searchHistory
  };
}

export default connect(mapStoreToProps)(CityInfo);
