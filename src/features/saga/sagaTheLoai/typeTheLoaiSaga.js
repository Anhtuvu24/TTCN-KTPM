export const getListTL = () => {
  return {
    type: "GET_LIST_TL",
  };
};

export const deleteTL = (data) => {
  return {
    type: "DELETE_TL",
    payload: data,
  };
};

export const addTL = (data) => {
  return {
    type: "ADD_TL",
    payload: data,
  };
};

export const updateTL = (data) => {
  return {
    type: "UPDATE_TL",
    payload: data,
  };
};
