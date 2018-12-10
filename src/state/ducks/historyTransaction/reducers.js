import { combineReducers } from "redux";
import types from "./types";
import Utility from "../../../utility/pagination";
import Page from "../../../utility/page";

const INITIAL_STATE_HISTORY_TRANSACTION = {
  historyTransactionList: {
    historyTransactions: [],
    error: null,
    loading: false,
    page: {
      ...Page
    }
  }
};

const fetchHistoryTransaction = (
  state = INITIAL_STATE_HISTORY_TRANSACTION,
  action
) => {
  let error;
  switch (action.type) {
    case types.FETCH_HISTORY_TRANSACTION:
      return {
        ...state,
        historyTransactionList: {
          ...state.historyTransactionList,
          // historyTransactions: [],
          error: null,
          loading: true
        }
      };
    case types.FETCH_HISTORY_TRANSACTION_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        historyTransactionList: {
          historyTransactions: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page
        }
      };
    }

    case types.FETCH_HISTORY_TRANSACTION_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        historyTransactionList: {
          ...state.historyTransactionList,
          historyTransactions: [],
          error: error,
          loading: false
        }
      };
    default:
      return state;
  }
};

const historyTransactionReducer = combineReducers({
  fetchHistoryTransaction: fetchHistoryTransaction
});

export default historyTransactionReducer;
