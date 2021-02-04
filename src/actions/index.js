import axios from "axios";
import {
  ALL,
  DETAILS,
  SHOW_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "./types";

export const allPokemons = (url) => async (dispatch) => {
  dispatch({
    type: ALL,
    payload: { loading: true },
  });
  const res = await axios.get(url);
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
      loading: false,
    },
  });
};

export const detailsOfPokemon = (name) => async dispatch => {
  dispatch ({
    type: DETAILS,
    payload:{loading:true},
  });
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(res);
};

export const addToFavorites = () => {
  return {
    type: ADD_FAVORITE,
  };
};

export const deleteFromFavorites = () => {
  return {
    type: DELETE_FAVORITE,
  };
};

export const showMyFavorites = () => {
  return {
    type: SHOW_FAVORITES,
  };
};
