export const getListDH = () => {
  return {
    type: "GET_LIST_DH",
  };
};

export const deleteDH = (data) => {
  return {
    type: "DELETE_DH",
    payload: data,
  };
};

export const addDH = (data) => {
  return {
    type: "ADD_DH",
    payload: data,
  };
};

export const updateDH = (data) => {
  return {
    type: "UPDATE_DH",
    payload: data,
  };
};
