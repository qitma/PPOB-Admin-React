import actions from "./actions";
import { fakeFetchPromoUsers } from "./service";

function addSelectedProperty(data) {
  //console.log(data);
  let newData = data.data;
  let newObj = newData.map(obj => {
    let newObj = {
      ...obj,
      selected: false
    };

    return newObj;
  });

  return { ...data, data: newObj, isSelectedAll: false };
}

export const fetchPromoUsers = page => {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  //console.log(page)
  return dispatch => {
    dispatch(actions.fetchPromoUserStart());

    return fakeFetchPromoUsers(page)
      .then(response => {
        //console.log(response)
        dispatch(actions.fetchPromoUserSuccess(addSelectedProperty(response)));
      })
      .catch(error => {
        dispatch(actions.fetchPromoUserFailure(error));
      });
  };
};

export const updateSelectedPromoUser = id => {
  return dispatch => {
    dispatch(actions.selectedPromoUser(id));
  };
};

export const updateAllSelectedPromoUser = () => {
  return dispatch => {
    dispatch(actions.allSelectedPromoUser());
  };
};

export default {
  fetchPromoUsers,
  updateSelectedPromoUser,
  updateAllSelectedPromoUser
};
