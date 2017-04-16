export const RECEIVE_DISHES = 'RECEIVE_DISHES';
export const FETCH_DISHES = 'FETCH_DISHES';
export const CREATE_DISH = 'CREATE_DISH';
export const RECEIVE_DISH = 'RECEIVE_DISH';
export const FETCH_DISH = 'FETCH_DISH';
export const UPDATE_DISH = 'UPDATE_DISH';
export const DELETE_DISH = 'DELETE_DISH';

export const receiveDishes = dishes => ({
  type: RECEIVE_DISHES,
  dishes
});

export const fetchDishes = () => ({
  type: FETCH_DISHES
});

export const createDish = dish => ({
  type: CREATE_DISH,
  dish
});

export const receiveDish = dish => ({
  type: RECEIVE_DISH,
  dish
});

export const fetchDish = dish => ({
  type: FETCH_DISH,
  dish
});

export const updateDish = dish => ({
  type: UPDATE_DISH,
  dish
});

export const deleteDish = dishId => ({
  type: DELETE_DISH,
  dishId
});
