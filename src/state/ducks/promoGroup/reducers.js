import { combineReducers } from "redux";
import types from "./types";
import Utility from "../../../utility/pagination";
import Page from "../../../utility/page";

const INITIAL_STATE_PROMO_GROUP = {
  promoGroupList: {
    promoGroups: [],
    error: null,
    loading: false,
    page: {
      ...Page
    },
    isSelectedAll: false
  }
};

const checkUnSelected = promoGroups => {
  return promoGroups.filter(x => x.selected === false).length > 0;
};

const fetchPromoGroup = (state = INITIAL_STATE_PROMO_GROUP, action) => {
  let error;
  switch (action.type) {
    case types.FETCH_PROMO_GROUP:
      return {
        ...state,
        promoGroupList: {
          ...state.promoGroupList,
          error: null,
          loading: true,
          isSelectedAll: false
        }
      };
    case types.FETCH_PROMO_GROUP_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        promoGroupList: {
          promoGroups: action.payload.data,
          error: null,
          loading: false,
          page: page,
          isSelectedAll: action.payload.isSelectedAll
        }
      };
    }
    case types.FETCH_PROMO_GROUP_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        promoGroupList: {
          ...state.promoGroupList,
          error: error,
          loading: false,
          isSelectedAll: false
        }
      };
    case types.UPDATE_SELECTED_PROMO_GROUP: {
      const id = action.payload;
      let newPromoGroups = state.promoGroupList.promoGroups.map(x => {
        if (x.id == id) {
          x = { ...x, selected: !x.selected };
        }
        return x;
      });

      let selectedAll = !checkUnSelected(newPromoGroups);

      return {
        ...state,
        promoGroupList: {
          ...state.promoGroupList,
          promoGroups: newPromoGroups,
          isSelectedAll: selectedAll
        }
      };
    }

    //break;
    case types.UPDATE_SELECTED_ALL_PROMO_GROUP: {
      let selectedAll = checkUnSelected(state.promoGroupList.promoGroups);
      let newPromoGroups = state.promoGroupList.promoGroups.map(x => {
        return { ...x, selected: selectedAll };
      });

      return {
        ...state,
        promoGroupList: {
          ...state.promoGroupList,
          promoGroups: newPromoGroups,
          isSelectedAll: selectedAll
        }
      };
    }
    default:
      return state;
  }
};

const promoGroupReducer = combineReducers({
  fetchPromoGroup: fetchPromoGroup
});

export default promoGroupReducer;
