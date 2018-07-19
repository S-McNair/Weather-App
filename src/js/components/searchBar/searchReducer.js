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
        weatherReport,
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
