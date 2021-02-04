import { ADD_FAVORITE } from "../actions/types";

const defaultState = {
  data:[],
  loading: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        data:[...state.data,action.payload.data],
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};
