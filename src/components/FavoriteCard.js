import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFromFavorites } from "../actions";

const PokeCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const deleteOnCLick = () => {
    dispatch(deleteFromFavorites(pokemon.id,pokemon.name));
  };
  return (
    <div className="column">
      <div className="ui link cards">
        <div className="card">
          <div className="ui image">
            <div className="ui grid right floated ">
              <div className="circular ui icon red button" onClick={deleteOnCLick}>
                <i className="close icon"></i>
              </div>
            </div>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="content">
            <Link to={`/${pokemon.name}/details`} className="header">
              {pokemon.name.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
