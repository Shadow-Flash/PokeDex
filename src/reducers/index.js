import { combineReducers } from "redux";
import pokeReducer from "./poke";
import detailsReducer from "./details";
import favoriteReducer from "./favorite";

export default combineReducers({
  details: detailsReducer,
  pokeReducer: pokeReducer,
  favorite:favoriteReducer,
});
