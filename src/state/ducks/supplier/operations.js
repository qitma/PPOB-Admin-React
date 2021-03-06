import actions from "./actions";
import { fakeFetchSuppliers } from "./service";

export function fetchSuppliers(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  //console.log(page)
  return dispatch => {
    dispatch(actions.fetchSupplierStart());

    return fakeFetchSuppliers(page)
      .then(response => {
        //console.log(response)
        dispatch(actions.fetchSupplierSuccess(response));
      })
      .catch(error => {
        dispatch(actions.fetchSupplierFailure(error));
      });
  };
}
export default {
  fetchSuppliers
};
