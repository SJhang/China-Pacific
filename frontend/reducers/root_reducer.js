import { combineReducers } from 'redux';
import ErrorReducer from './error_reducer';

export default combineReducers({
  error: ErrorReducer
});
