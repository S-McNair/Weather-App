import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    cityName: store.cityInput.cityName,
    searchHistory: store.cityInput.searchHistory
  };
}

export default connect(mapStoreToProps)(SearchBar);
