import { combineReducers } from "redux";
import pokeReducer from "./poke";
import detailsReducer from "./details";

export default combineReducers({
  details: detailsReducer,
  pokeReducer: pokeReducer,
});
