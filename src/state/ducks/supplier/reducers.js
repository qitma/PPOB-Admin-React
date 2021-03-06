import { combineReducers } from "redux";
import types from "./types";
import Utility from "../../../utility/pagination";
import Page from "../../../utility/page";

const INITIAL_STATE_SUPPLIER = {
  supplierList: {
    suppliers: [],
    error: null,
    loading: false,
    page: {
      ...Page
    }
  }
};

const fetchSupplier = (state = INITIAL_STATE_SUPPLIER, action) => {
  let error;
  switch (action.type) {
    case types.FETCH_SUPPLIER:
      return {
        ...state,
        supplierList: {
          ...state.supplierList,
          // suppliers: [],
          error: null,
          loading: true
        }
      };
    case types.FETCH_SUPPLIER_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        supplierList: {
          suppliers: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page
        }
      };
    }

    case types.FETCH_SUPPLIER_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        supplierList: {
          ...state.supplierList,
          suppliers: [],
          error: error,
          loading: false
        }
      };
    default:
      return state;
  }
};

const supplierReducer = combineReducers({
  fetchSupplier: fetchSupplier
});

export default supplierReducer;
