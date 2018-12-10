import { combineReducers } from "redux";
import types from "./types";
import Utility from "../../../utility/pagination";
import Page from "../../../utility/page";

const INITIAL_STATE_USER = {
  userList: {
    users: [],
    error: null,
    loading: false,
    page: {
      ...Page
    }
  }
};

const fetchUser = (state = INITIAL_STATE_USER, action) => {
  let error;
  switch (action.type) {
    case types.FETCH_USER:
      return {
        ...state,
        userList: {
          ...state.userList,
          // users: [],
          error: null,
          loading: true
        }
      };
    case types.FETCH_USER_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        userList: {
          users: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page
        }
      };
    }

    case types.FETCH_USER_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        userList: {
          ...state.userList,
          users: [],
          error: error,
          loading: false
        }
      };
    default:
      return state;
  }
};

const userReducer = combineReducers({
  fetchUser: fetchUser
});

export default userReducer;
