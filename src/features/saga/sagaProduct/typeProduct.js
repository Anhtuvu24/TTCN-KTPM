export const getListPD = () => {
  return {
    type: "GET_LIST_PD",
  };
};

export const deletePD = (data) => {
  return {
    type: "DELETE_PD",
    payload: data,
  };
};

export const addPD = (data) => {
  return {
    type: "ADD_PD",
    payload: data,
  };
};

export const updatePD = (data) => {
  return {
    type: "UPDATE_PD",
    payload: data,
  };
};
