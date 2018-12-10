import { combineReducers } from "redux";
import types from "./types";
import Utility from "../../../utility/pagination";
import Page from "../../../utility/page";

const INITIAL_STATE_PROMO_USER = {
  promoUserList: {
    promoUsers: [],
    error: null,
    loading: false,
    page: {
      ...Page
    },
    isSelectedAll: false
  }
};

const checkUnSelected = promoUsers => {
  return promoUsers.filter(x => x.selected === false).length > 0;
};

const fetchPromoUser = (state = INITIAL_STATE_PROMO_USER, action) => {
  let error;
  switch (action.type) {
    case types.FETCH_PROMO_USER:
      return {
        ...state,
        promoUserList: {
          ...state.promoUserList,
          error: null,
          loading: true,
          isSelectedAll: false
        }
      };
    case types.FETCH_PROMO_USER_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        promoUserList: {
          promoUsers: action.payload.data,
          error: null,
          loading: false,
          page: page,
          isSelectedAll: action.payload.isSelectedAll
        }
      };
    }
    case types.FETCH_PROMO_USER_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        promoUserList: {
          ...state.promoUserList,
          error: error,
          loading: false,
          isSelectedAll: false
        }
      };
    case types.UPDATE_SELECTED_PROMO_USER: {
      const id = action.payload;
      let newPromoUsers = state.promoUserList.promoUsers.map(x => {
        if (x.id == id) {
          x = { ...x, selected: !x.selected };
        }
        return x;
      });

      let selectedAll = !checkUnSelected(newPromoUsers);

      return {
        ...state,
        promoUserList: {
          ...state.promoUserList,
          promoUsers: newPromoUsers,
          isSelectedAll: selectedAll
        }
      };
    }

    //break;
    case types.UPDATE_SELECTED_ALL_PROMO_USER: {
      let selectedAll = checkUnSelected(state.promoUserList.promoUsers);
      let newPromoUsers = state.promoUserList.promoUsers.map(x => {
        return { ...x, selected: selectedAll };
      });

      return {
        ...state,
        promoUserList: {
          ...state.promoUserList,
          promoUsers: newPromoUsers,
          isSelectedAll: selectedAll
        }
      };
    }
    default:
      return state;
  }
};

const promoUserReducer = combineReducers({
  fetchPromoUser: fetchPromoUser
});

export default promoUserReducer;
