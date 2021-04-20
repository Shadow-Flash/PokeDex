import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allPokemons } from "../actions";
import PokeCard from "./PokeCard";

const PokeData = () => {
  const baseURL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokeReducer.data);
  const nextPage = useSelector((state) => state.pokeReducer.nextUrl);
  const prevPage = useSelector((state) => state.pokeReducer.prevUrl);
  const loading = useSelector((state) => state.pokeReducer.loading);

  useEffect(() => {
    const fetch = () => {
      dispatch(
        allPokemons(baseURL)
      );
    };fetch();
  },[dispatch]);

  

  const nextUrl = () => {
    if (nextPage) {
      dispatch(allPokemons(nextPage));
    } else {
      return;
    }
  };

  const prevUrl = () => {
    if (prevPage) {
      dispatch(allPokemons(prevPage));
    } else {
      return;
    }
  };

  return (
    <div className="ui container">
      <h1 className="ui red header">PokeDex</h1>
      <Link to="/favorites">
        <div
          className="ui animated fade orange button right floated"
          tabIndex="0"
        >
          <div className="visible content">Favorites</div>
          <div className="hidden content">
            <i className="star icon"></i>
          </div>
        </div>
      </Link>
      {loading ? (
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Wait Pokemon's Loading</div>
        </div>
      ) : (
        <>
          <div className="ui two column grid">
            {pokemons.map((pokemon) => {
              return <PokeCard key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
          <div className="ui grid container">
            <div className="circular ui tiny icon red button" onClick={prevUrl}>
              <i className="left arrow icon"></i>
            </div>
            <div
              className="circular ui tiny right icon red button"
              onClick={nextUrl}
            >
              <i className="right arrow icon"></i>
            </div>
          </div>
          <p></p>
        </>
      )}
    </div>
  );
};

export default PokeData;
