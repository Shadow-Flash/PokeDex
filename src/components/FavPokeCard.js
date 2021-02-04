import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PokeCard from "./PokeCard";

const FavPokeCard = () => {
  const pokemons = useSelector((state) => state.favorite.data);
  return (
    <div className="ui container">
      <h1 className="ui orange header">Your Favorites</h1>
      <div className="ui two column grid">
      {pokemons.map((pokemon, id) => {
              return <PokeCard key={id} pokemon={pokemon} />;
            })}
      </div>
    </div>
  );
};

export default FavPokeCard;
