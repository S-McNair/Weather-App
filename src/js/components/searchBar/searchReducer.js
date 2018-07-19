const defaultState = {
  apiName: 'City Name',
  tempF: '',
  latLong: '',
  pressure: '',
  humidity: '',
  lowTempF: '',
  highTempF: '',
  windSpeed: '',
  weatherImage: 'http://openweathermap.org/img/w/01d.png',
  weatherDetails: '',
  searchHistory: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SEARCH_CITY': {
      return {
        ...state,
        cityName: payload.cityName
      };
    }

    case 'GET_WEATHER': {
      const {
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
        time } = action.payload;
      return {
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
        searchHistory: [
          ...state.searchHistory.reverse(),
          { apiName, dateMDY, time }
        ]
      };
    }

    default: {
      return state;
    }
  }
}
