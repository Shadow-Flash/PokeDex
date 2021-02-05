import { ADD_FAVORITE } from "../actions/types";
import _ from "lodash";

const defaultState = {
  data: [],
  pokeName:[],
  loading: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      let index = state.data.findIndex(
        (poke) => poke.id === action.payload.data.id
      );
      if (index === -1)
        return {
          ...state,
          data: [...state.data, action.payload.data],
          pokeName:[...state.pokeName,action.payload.pokeName],
          loading: action.payload.loading,
        };
      return {
        ...state,
      };
    default:
      return state;
  }
};
