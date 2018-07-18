const defaultState = {
  apiName: '',
  tempF: '',
  latLong: '',
  pressure: '',
  humidity: '',
  lowTempF: '',
  highTempF: '',
  windSpeed: '',
  weatherReport: '',
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
        weatherReport,
        weatherDetails } = action.payload;
      return {
        apiName,
        tempF,
        latLong,
        pressure,
        humidity,
        lowTempF,
        highTempF,
        windSpeed,
        weatherReport,
        weatherDetails,
        searchHistory: [
          ...state.searchHistory,
          { apiName }
        ]
      };
    }

    default: {
      return state;
    }
  }
}
