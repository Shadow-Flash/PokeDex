import axios from "../api/poke";
import {
  ALL,
  DETAILS,
  SHOW_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "./types";

export const allPokemons = () => async (dispatch) => {
  const res = await axios.get();
  let nextPage = res.data.next;
  let prevPage = res.data.previous;
  let pokemonData = await Promise.all(
    res.data.results.map(async (pokemon) => {
      let pokemonRecord = await axios.get(pokemon.url);
      return pokemonRecord.data;
    })
  );
  dispatch({
    type: ALL,
    payload: {
      data: pokemonData,
      next: nextPage,
      prev: prevPage,
    },
  });
};

export const detailsOfPokemon = () => {
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
