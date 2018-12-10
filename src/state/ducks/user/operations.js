import actions from "./actions";
import { fakeFetchUsers } from "./service";

export function fetchUsers(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  //console.log(page)
  return dispatch => {
    dispatch(actions.fetchUserStart());

    return fakeFetchUsers(page)
      .then(response => {
        //console.log(response)
        dispatch(actions.fetchUserSuccess(response));
      })
      .catch(error => {
        dispatch(actions.fetchUserFailure(error));
      });
  };
}
export default {
  fetchUsers
};
