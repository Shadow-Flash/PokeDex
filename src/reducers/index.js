import {
  ALL,
  DETAILS,
  SHOW_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "../actions/types";

const defaultState = {
  loading: true,
  data: [],
  nextUrl:"",
  prevUrl:"",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        data:action.payload.data,
        nextUrl:action.payload.next,
        prevUrl:action.payload.prev,
        loading: false,
      };
    case DETAILS:
      return {};
    case ADD_FAVORITE:
      return {};
    case DELETE_FAVORITE:
      return {};
    case SHOW_FAVORITES:
      return {};
    default:
      return state;
  }
};
