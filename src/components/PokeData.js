import React, { useState, useEffect } from "react";
import axios from "../api/poke";
import PokeCard from "./PokeCard";

const PokeData = () => {

  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get();
      const data = await Promise.all(
        response.data.results.map(async (pokemon) => {
          let pokemonRecord = await axios.get(pokemon.url);
          return pokemonRecord.data;
        })
      );
      setPokemon(data);
    };
    getPokemon();
  }, []);

  return (
    <div className="ui container">
      <h1>PokeDex</h1>
      <div className="ui two column grid">
        {pokemons.map((pokemon, id) => {
          return <PokeCard key={id} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default PokeData;
