import {  CREATE_DISH,
          UPDATE_DISH,
          DELETE_DISH,
          FETCH_DISHES,
          fetchDishes,
          receiveDishes,
          receiveDish,
        } from '../actions/dish_actions';
import { receiveErrors } from '../actions/error_actions';
import {  postDish,
          getDish,
          getDishes,
          updateDish,
          deleteDish,
        } from '../util/dish_api_util';

export default ({ getState, dispatch }) => next => action => {
  let successCallback;
  let errorCallback = errors => dispatch(receiveErrors(errors));

  switch (action.type) {
    case FETCH_DISHES:
      successCallback = dishes => dispatch(receiveDishes(dishes));
      getDishes(successCallback, errorCallback);
      return next(action);
    case CREATE_DISH:
      successCallback = dish => dispatch(receiveDish(dish));
      postDish(action.dish, successCallback, errorCallback);
      return next(action);
    case UPDATE_DISH:
      successCallback = dish => dispatch(receiveDish(dish));
      updateDish(action.dish, successCallback, errorCallback);
      return next(action);
    case DELETE_DISH:
      deleteDish(action.dish, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
