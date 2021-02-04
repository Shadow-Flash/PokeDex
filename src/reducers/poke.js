import {
  ALL,
  DETAILS,
  SHOW_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "../actions/types";

const defaultState = {
    data: [],
    nextUrl:"",
    prevUrl:"",
    loading:true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        data:action.payload.data,
        nextUrl:action.payload.next,
        prevUrl:action.payload.prev,
        loading:action.payload.loading,
      };
    default:
      return state;
  }
};
