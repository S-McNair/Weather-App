const defaultState = {
  apiName: '',
  // tempF: '',
  // pressure: '',
  // humidity: '',
  // lowTemp: '',
  // highTemp: '',
  // windSpeed: '',
  // weatherReport: '',
  // weatherReportDetailed: '',
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
      // const { apiName, tempF,pressure, humidity, lowTempF, highTempF, windSpeed, weatherReport, weatherReportDetailed } = action.payload;
      const { apiName, tempF, pressure, humidity } = action.payload;
      return {
        apiName,
        // tempF: '',
        // pressure: '',
        // humidity: '',
        // lowTemp: '',
        // highTemp: '',
        // windSpeed: '',
        // weatherReport: '',
        // weatherReportDetailed: '',
        searchHistory: [
          ...state.searchHistory,
          { apiName, tempF, pressure, humidity }
        ]
      };
    }

    default: {
      return state;
    }
  }
}
