import { combineReducers } from 'redux';
import searchReducer from './components/searchBar/searchReducer';

const rootReducer = combineReducers({
// add reducers
  cityInput: searchReducer
});

export default rootReducer;
