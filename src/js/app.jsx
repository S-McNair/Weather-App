import React from 'react';
import SearchBar from './components/searchBar/index';
import CityInfo from './components/cityInfo/index';
import SearchHistory from './components/searchHistory/index';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='title-box jumbotron view'>
          <h1>Origin Weather Application</h1><br />
          <h6>Always know if you'll need an umbrella!</h6>
        </div>
        <div id='search-bar' className='col-12 view' >
          <SearchBar />
        </div><br />
        <div className='form-group row'>
          <div id='info-block' className='col-6 view' >
            <CityInfo />
          </div>
          <div id='history-card' className='col-6 view' >
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
