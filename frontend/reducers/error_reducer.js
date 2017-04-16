import { RECEIVE_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

const _defaultState = {
  errors: []
};

const ErrorReducer = (state = _defaultState, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge(newState, { errors: action.errors });
    default:
      return state;
  }
};

export default ErrorReducer;
