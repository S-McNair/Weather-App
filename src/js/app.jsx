import React from 'react';
import SearchBar from './components/searchBar/index';
import CityInfo from './components/cityInfo/index';
import SearchHistory from './components/searchHistory/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='title-box jumbotron'>
          <h1>Origin Weather Application</h1><br />
          <h6>Always know if you'll need an umbrella!</h6>
          <h7>(hint: this is San Diego, you won't)</h7>
        </div>
        <div id='search-bar' className='col-12' >
          <SearchBar />
        </div><br />
        <div className='form-group row'>
          <div id='info-block' className='col-6' >
            <CityInfo />
          </div>
          <div id='history-card' className='col-6' >
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
