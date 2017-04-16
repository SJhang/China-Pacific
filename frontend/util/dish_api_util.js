export const postDish = (dish, success, errors) => {
  $.ajax({
    method: 'post',
    url: 'api/dishes',
    data: { dish },
    success,
    errors
  });
};

export const getDish = (dishId, success, errors) => {
  $.ajax({
    url: `api/dishes/${dishId}`,
    success,
    errors
  });
};

export const getDishes = (success, errors) => {
  debugger;
  $.ajax({
    url: 'api/dishes',
    success,
    errors
  });
};

export const updateDish = (dish, success, errors) => {
  $.ajax({
    method: 'patch',
    url: 'api/dishes',
    success,
    errors
  });
};

export const deleteDish = (dishId, errors) => {
  $.ajax({
    method: 'delete',
    url: `api/dishes/${dishId}`,
    errors
  });
};
