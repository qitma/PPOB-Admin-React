import types from "./types";

export const fetchUserStart = () => {
  return {
    type: types.FETCH_USER
  };
};

export const fetchUserSuccess = supplier => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: supplier
  };
};

export const fetchUserFailure = error => {
  return {
    type: types.FETCH_USER_FAILURE,
    payload: error
  };
};

export default {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure
};
