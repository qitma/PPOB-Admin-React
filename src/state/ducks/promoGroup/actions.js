import types from "./types";

export const fetchPromoGroupStart = () => {
  return {
    type: types.FETCH_PROMO_GROUP
  };
};

export const fetchPromoGroupSuccess = promoGroups => {
  return {
    type: types.FETCH_PROMO_GROUP_SUCCESS,
    payload: promoGroups
  };
};

export const fetchPromoGroupFailure = error => {
  return {
    type: types.FETCH_PROMO_GROUP_FAILURE,
    payload: error
  };
};

export const selectedPromoGroup = id => {
  return {
    type: types.UPDATE_SELECTED_PROMO_GROUP,
    payload: id
  };
};

export const allSelectedPromoGroup = () => {
  return {
    type: types.UPDATE_SELECTED_ALL_PROMO_GROUP
  };
};

export const createPromoGroupStart = () => {
  return {
    type: types.CREATE_PROMO_GROUP
  };
};

export const createPromoGroupSuccess = promoGroup => {
  return {
    type: types.CREATE_PROMO_GROUP_SUCCESS,
    payload: promoGroup
  };
};

export const createPromoGroupFailure = error => {
  return {
    type: types.CREATE_PROMO_GROUP_FAILURE,
    payload: error
  };
};

export default {
  fetchPromoGroupStart,
  fetchPromoGroupSuccess,
  fetchPromoGroupFailure,
  selectedPromoGroup,
  allSelectedPromoGroup,
  createPromoGroupStart,
  createPromoGroupSuccess,
  createPromoGroupFailure
};
