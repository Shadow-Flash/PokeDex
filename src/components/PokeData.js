import React, { useState, useEffect } from "react";
import axios from "../api/poke";
import PokeCard from "./PokeCard";

const PokeData = () => {
  const [pokemons, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get();
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      await fetchPokemon(response.data.results);
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
    await axios.get(nextPage).then(async (ndata) => {
      await fetchPokemon(ndata.data.results);
      setNextPage(ndata.data.next);
      setPrevPage(ndata.data.previous);
    });
  };

  const prevUrl = async () => {
    await axios.get(prevPage).then(async (pdata) => {
      await fetchPokemon(pdata.data.results);
      setNextPage(pdata.data.next);
      setPrevPage(pdata.data.previous);
    });
  };

  return (
    <div className="ui container">
      <h1>PokeDex</h1>
      <div className="ui two column grid">
        {pokemons.map((pokemon, id) => {
          return <PokeCard key={id} pokemon={pokemon} />;
        })}
      </div>
      <div className="ui grid container">
        <a className="circular ui tiny icon button " onClick={prevUrl}>
          <i className="left arrow icon"></i>
        </a>
        <a className=" circular ui tiny right icon button" onClick={nextUrl}>
          <i className="right arrow icon"></i>
        </a>
      </div>
    </div>
  );
};

export default PokeData;
