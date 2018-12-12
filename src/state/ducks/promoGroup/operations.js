import actions from "./actions";
import { fakeFetchPromoGroups, fakeCreatePromoGroups } from "./service";

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

export const fetchPromoGroups = page => {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  //console.log(page)
  return dispatch => {
    dispatch(actions.fetchPromoGroupStart());

    return fakeFetchPromoGroups(page)
      .then(response => {
        //console.log(response)
        dispatch(actions.fetchPromoGroupSuccess(addSelectedProperty(response)));
      })
      .catch(error => {
        dispatch(actions.fetchPromoGroupFailure(error));
      });
  };
};

export const updateSelectedPromoGroup = id => {
  return dispatch => {
    dispatch(actions.selectedPromoGroup(id));
  };
};

export const updateAllSelectedPromoGroup = () => {
  return dispatch => {
    dispatch(actions.allSelectedPromoGroup());
  };
};

export function createPromoGroup(post) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/promoGroup-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(actions.createPromoGroupStart());

    return fakeCreatePromoGroups(post)
      .then(response => {
        dispatch(actions.createPromoGroupSuccess(response));
      })
      .catch(error => {
        dispatch(actions.createPromoGroupFailure(error));
      });
  };
}

export default {
  fetchPromoGroups,
  updateSelectedPromoGroup,
  updateAllSelectedPromoGroup,
  createPromoGroup
};
