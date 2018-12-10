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

export default {
  fetchPromoGroupStart,
  fetchPromoGroupSuccess,
  fetchPromoGroupFailure,
  selectedPromoGroup,
  allSelectedPromoGroup
};
