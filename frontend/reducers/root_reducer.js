import { combineReducers } from 'redux';
import ErrorReducer from './error_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
  error: ErrorReducer,
  session: SessionReducer
});
