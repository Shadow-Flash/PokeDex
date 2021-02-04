import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allPokemons } from "../actions";
import PokeCard from "./PokeCard";

const PokeData = () => {
  const pokemons = useSelector((state) => state.pokeReducer.data);
  const dispatch = useDispatch();
  const nextPage = useSelector((state) => state.pokeReducer.nextUrl);
  const prevPage = useSelector((state) => state.pokeReducer.prevUrl);
  const loading = useSelector((state) => state.pokeReducer.loading);
  useEffect(async () => {
    dispatch(
      allPokemons("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
    );
  }, []);

  const nextUrl = () => {
    if (nextPage) {
      dispatch(allPokemons(nextPage));
    }
    else{
      return
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
      <Link to="/home/favorites">
        <div
          className="ui animated fade orange button right floated"
          tabindex="0"
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
            {pokemons.map((pokemon, id) => {
              return <PokeCard key={id} pokemon={pokemon} />;
            })}
          </div>
          <div className="ui grid container">
            <a className="circular ui tiny icon red button" onClick={prevUrl}>
              <i className="left arrow icon"></i>
            </a>
            <a
              className=" circular ui tiny right icon red button"
              onClick={nextUrl}
            >
              <i className="right arrow icon"></i>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default PokeData;
