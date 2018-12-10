import actions from "./actions";
import { fakeFetchHistoryTransactions } from "./service";

export function fetchHistoryTransactions(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  //console.log(page)
  return dispatch => {
    dispatch(actions.fetchHistoryTransactionStart());

    return fakeFetchHistoryTransactions(page)
      .then(response => {
        //console.log(response)
        dispatch(actions.fetchHistoryTransactionSuccess(response));
      })
      .catch(error => {
        dispatch(actions.fetchHistoryTransactionFailure(error));
      });
  };
}
export default {
  fetchHistoryTransactions
};
