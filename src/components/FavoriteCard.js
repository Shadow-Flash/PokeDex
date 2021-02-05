import React from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ pokemon }) => {
  return (
    <div className="column">
      <div className="ui stackable cards">
        <div className="card">
          <div className="ui image">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="content">
            <Link to={`/home/${pokemon.name}/details`} className="header">
              {pokemon.name.toUpperCase()}
            </Link>
          <div className="ui animated fade red button right floated" tabIndex="0">
            <div className="visible content">Delete Card</div>
            <div className="hidden content">Release {pokemon.name}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
