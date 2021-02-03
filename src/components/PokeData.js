import React, { useState, useEffect } from "react";
import axios from "../api/poke";
import PokeCard from "./PokeCard";

const PokeData = () => {
  const [pokemons, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get();
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      await fetchPokemon(response.data.results);
      setWait(false);
    };
    getPokemon();
  }, []);

  const fetchPokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await axios.get(pokemon.url);
        return pokemonRecord.data;
      })
    );
    setPokemon(pokemonData);
  };

  const nextUrl = async () => {
    setWait(true);
    await axios.get(nextPage).then(async (ndata) => {
      await fetchPokemon(ndata.data.results);
      setNextPage(ndata.data.next);
      setPrevPage(ndata.data.previous);
      setWait(false);
    });
  };

  const prevUrl = async () => {
    if (!prevPage) return;
    setWait(true);
    await axios.get(prevPage).then(async (pdata) => {
      await fetchPokemon(pdata.data.results);
      setNextPage(pdata.data.next);
      setPrevPage(pdata.data.previous);
      setWait(false);
    });
  };

  return (
    <div className="ui container">
      <h1 className='ui red header'>PokeDex</h1>
      <div
        className="ui animated fade orange button right floated"
        tabindex="0"
      >
        <div class="visible content">Favorites</div>
        <div class="hidden content">
          <i class="star icon"></i>
        </div>
      </div>
      {wait ? (
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
            <a className="circular ui tiny icon red button " onClick={prevUrl}>
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
