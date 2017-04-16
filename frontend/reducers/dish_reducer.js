import {  RECEIVE_DISHES,
          RECEIVE_DISH
} from '../actions/dish_actions';

import { merge } from 'lodash';

let _defaultState = {
};

const DishReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_DISHES:
      return action.dishes;
    case RECEIVE_DISH:
      newState.items[action.dish.id] = action.dish;
      return newState;
    default:
      return state;
  }
};

export default DishReducer;
