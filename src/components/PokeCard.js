import React from "react";

const PokeCard = ({ pokemon }) => {
  return (
    <div className="column">
      <div className="ui stackable cards">
        <div className="card">
          <div className="ui image">
            <img src={pokemon.sprites.front_default} />
          </div>
          <div className="content">
            <i className="right floated star icon"></i>
            <a className="header">{pokemon.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
