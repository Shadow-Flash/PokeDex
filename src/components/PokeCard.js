import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const PokeCard = ({ pokemon }) => {
  return (
    <div className="column">
      <div className="ui stackable cards">
        <div className="card">
          <div className="ui image">
            <img src={pokemon.sprites.front_default} />
          </div>
          <div className="content">
            <Link to={`/home/${pokemon.name}/details`} className="header">{pokemon.name.toUpperCase()}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PokeCard;
