import { DETAILS } from "../actions/types";

const defaultState = {
  name: "",
  experience: "",
  height: 0,
  moves: [],
  type: "",
  weight: 0,
  image:{},
  abilities:[],
  loading:true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case DETAILS:
      return {
        ...state,
        name: action.payload.name,
        experience: action.payload.experience,
        height: action.payload.height,
        moves: action.payload.moves,
        type: action.payload.type,
        weight: action.payload.weight,
        image:action.payload.image,
        abilities:action.payload.abilities,
        loading:action.payload.loading,
      };
    default:
        return state;
  }
};
