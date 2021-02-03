import React from "react";

const PokeCard = ({ pokemon }) => {
  return (
    <div className="ui three column grid">
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src={pokemon.sprites.front_default} />
          </div>
          <div className="content">
            <a className="header">{pokemon.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
