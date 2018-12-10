import types from "./types";

export const fetchPromoUserStart = () => {
  return {
    type: types.FETCH_PROMO_USER
  };
};

export const fetchPromoUserSuccess = promoUsers => {
  return {
    type: types.FETCH_PROMO_USER_SUCCESS,
    payload: promoUsers
  };
};

export const fetchPromoUserFailure = error => {
  return {
    type: types.FETCH_PROMO_USER_FAILURE,
    payload: error
  };
};

export const selectedPromoUser = id => {
  return {
    type: types.UPDATE_SELECTED_PROMO_USER,
    payload: id
  };
};

export const allSelectedPromoUser = () => {
  return {
    type: types.UPDATE_SELECTED_ALL_PROMO_USER
  };
};

export default {
  fetchPromoUserStart,
  fetchPromoUserSuccess,
  fetchPromoUserFailure,
  selectedPromoUser,
  allSelectedPromoUser
};
