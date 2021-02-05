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

export const detailsOfPokemon = (name) => async (dispatch) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  dispatch({
    type: DETAILS,
    payload: {
      name: res.data.name,
      experience: res.data.base_experience,
      height: res.data.height,
      moves: res.data.moves.map((move) => {
        return move.move.name;
      }),
      type: res.data.types.map((type) => {
        return type.type.name;
      }),
      weight: res.data.weight,
      image: res.data.sprites,
      abilities: res.data.abilities.map((ability) => {
        return ability.ability.name;
      }),
      loading: false,
    },
  });
};

export const addToFavorites = (name) => async (dispatch) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  dispatch({
    type: ADD_FAVORITE,
    payload: {
      data: res.data,
      loading: false,
      pokeName:res.data.name,
    },
  });
};

export const showMyFavorites = () => {
  return {
    type: SHOW_FAVORITES,
  };
};

export const deleteFromFavorites = () => {
  return {
    type: DELETE_FAVORITE,
  };
};
