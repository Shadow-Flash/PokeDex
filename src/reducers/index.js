import {
  ALL,
  DETAILS,
  SHOW_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "../actions/types";

export default (state = 0, action) => {
  switch (action.type) {
    case ALL:
      return {};
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
