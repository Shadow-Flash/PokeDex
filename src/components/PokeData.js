import React, { useState } from "react";
import axios from "../api/poke";
import PokeCard from "./PokeCard";

const PokeData = () => {
  const [pokemons, setPokemon] = useState([]);
  const getPokemon = async () => {
    const response = await axios.get();
    const data = await Promise.all(response.data.results.map(async pokemon => {
      let pokemonRecord = await axios.get(pokemon.url)
      return pokemonRecord.data;
    }))
    setPokemon(data);
  };
  return (
    <div>
      <h2 onClick={getPokemon}>PokeDex</h2>
      <div className="ui container">
        {pokemons.map((pokemon,id) => {
          return <PokeCard key={id} pokemon={pokemon} />
        })}
      </div>
    </div>
  );
};

export default PokeData;
