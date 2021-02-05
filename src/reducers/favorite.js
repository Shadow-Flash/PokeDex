import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const defaultState = {
  data: [],
  pokeName: [],
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
          pokeName: [...state.pokeName, action.payload.pokeName],
          loading: action.payload.loading,
        };
      return {
        ...state,
      };

    case DELETE_FAVORITE:
      const filterData = state.data.filter((del) => del.id !== action.payload.id);
      const filterName = state.pokeName.filter(del => del !== action.payload.pokeName);
      return {
        ...state,
        data: filterData,
        pokeName: filterName
      };
    default:
      return state;
  }
};
