import {
  ALL,
  DETAILS,
  SHOW_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "./types";

export default allPokemons = () => {
  return {
    type: ALL,
  };
};

export default detailsOfPokemon = () => {
  return {
    type: DETAILS,
  };
};

export default addToFavorites = () => {
  return {
    type: ADD_FAVORITE,
  };
};

export default deleteFromFavorites = () => {
  return {
    type: DELETE_FAVORITE,
  };
};

export default showMyFavorites = () => {
  return {
    type: SHOW_FAVORITES,
  };
};
