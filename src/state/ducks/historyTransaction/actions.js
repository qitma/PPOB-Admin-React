import types from "./types";

export const fetchHistoryTransactionStart = () => {
  return {
    type: types.FETCH_HISTORY_TRANSACTION
  };
};

export const fetchHistoryTransactionSuccess = historyTransaction => {
  return {
    type: types.FETCH_HISTORY_TRANSACTION_SUCCESS,
    payload: historyTransaction
  };
};

export const fetchHistoryTransactionFailure = error => {
  return {
    type: types.FETCH_HISTORY_TRANSACTION_FAILURE,
    payload: error
  };
};

export default {
  fetchHistoryTransactionStart,
  fetchHistoryTransactionSuccess,
  fetchHistoryTransactionFailure
};
