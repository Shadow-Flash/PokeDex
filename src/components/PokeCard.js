import React from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ pokemon }) => {
  return (
    <div className="column">
      <Link to={`/${pokemon.name}/details`} className="header">
        <div className="ui link cards">
          <div className="card">
            <div className="ui image">
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="content">
              <div className="header">{pokemon.name.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokeCard;
