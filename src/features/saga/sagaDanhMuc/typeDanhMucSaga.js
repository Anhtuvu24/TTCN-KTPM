export const getListDM = () => {
  return {
    type: "GET_LIST_DM",
  };
};

export const deleteDM = (data) => {
  return {
    type: "DELETE_DM",
    payload: data,
  };
};

export const addDM = (data) => {
  return {
    type: "ADD_DM",
    payload: data,
  };
};

export const updateDM = (data) => {
  return {
    type: "UPDATE_DM",
    payload: data,
  };
};
