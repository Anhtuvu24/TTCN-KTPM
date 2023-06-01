export const getListAccount = () => {
  return {
    type: "GET_LIST_ACCOUNT",
  };
};

export const login = (data) => ({
  type: "LOGIN",
  payload: data,
});

export const updateUser = (data) => ({
  type: "UPDATE_USER",
  payload: data,
});

export const register = (data) => ({
  type: "REGISTER",
  payload: data,
});

export const deleteUser = (data) => {
  return {
    type: "DELETE_USER",
    payload: data,
  };
};

export const updateUserOnTable = (data) => {
  return {
    type: "UPDATE_USER_ON_TABLE",
    payload: data,
  };
};
