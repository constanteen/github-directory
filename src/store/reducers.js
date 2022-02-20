import { combineReducers } from "redux";
import * as types from "./actions/action_types";

const initialState = {
  loading: false,
  users: [],
  error: "",
  repos: [],
  page: 1,
  perPage: 30,
};

function usersReducer(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_USERS:
      return {
        ...state,
        users: payload,
      }
    
    case types.SEARCH_USERS:
      return {
        ...state,
        users: [...state.users, ...payload],
      }

    case types.FETCH_MORE_USERS:
      return {
        ...state,
        perPage: state.perPage + 30,
      }

    case types.GO_TO_NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }

    case types.CLEAR_DATA: 
      return {
        ...state,
        users: [],
        page: 1,
        perPage: 30,
        error: "",
      }

    case types.SET_ERROR:
      return {
        ...state,
        error: payload,
      }

    default:
      return state;
  }
};


function reposReducer(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_REPOS:
      return {
        ...state,
        repos: payload,
      }

    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
  repos: reposReducer,
});
