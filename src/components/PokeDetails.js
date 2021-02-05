import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsOfPokemon, addToFavorites } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";
import { ADD_FAVORITE } from "../actions/types";

const PokeDetails = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.details.name);
  const exp = useSelector((state) => state.details.experience);
  const height = useSelector((state) => state.details.height);
  const moves = useSelector((state) => state.details.moves);
  const type = useSelector((state) => state.details.type);
  const weight = useSelector((state) => state.details.weight);
  const image = useSelector((state) => state.details.image);
  const ability = useSelector((state) => state.details.abilities);
  const loading = useSelector((state) => state.details.loading);
  const PokeName = useSelector((state) => state.favorite.pokeName);

  useEffect(() => {
    dispatch(detailsOfPokemon(props.match.params.name));
  }, []);

  const addName = props.match.params.name;
  const addToFavorite = () => {
    if (_.isEmpty(PokeName)) {
      dispatch(addToFavorites(addName));
    } else {
      let re = _.includes(PokeName, addName);
      if (!re) {
        dispatch(addToFavorites(addName));
      }
    }
  };

  return (
    <div className="ui container">
      <p></p>
      <h1 className="ui red header">{name.toUpperCase()}</h1>
      {loading ? (
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Wait {name} Loading...</div>
        </div>
      ) : (
        <>
          <div className="ui small images">
            <img className="ui medium image" src={image.front_default} />
            <img className="ui medium image" src={image.back_default} />
          </div>
          <div className="ui inverted segment">
            {_.includes(PokeName, addName) ? (
              <></>
            ) : (
                
                <div
                className="ui animated fade orange button right floated"
                tabIndex="0"
                onClick={addToFavorite}
              >
                <div className="visible content">Add to Favorite</div>
                <div className="hidden content">
                  <i className="ui star icon" />
                </div>
              </div>
              
            )}

            <Link to="/home">
              <div
                className="ui animated blue button right floated"
                tabIndex="0"
              >
                <div className="visible content">Back</div>
                <div className="hidden content">
                  <i className="left arrow icon"></i>
                </div>
              </div>
            </Link>
            <p></p>
            <div className="ui grid">
              <h3 className="ui red inverted header">Experience : </h3>
              <p>{exp}</p>
            </div>
            <div className="ui grid">
              <h3 className="ui red inverted header">Abilities : </h3>
              {ability.map((a) => (
                <p>{a}</p>
              ))}
            </div>
            <div className="ui grid">
              <h3 className="ui red inverted header">Type : </h3>
              {type.map((t) => (
                <p>{t}</p>
              ))}
            </div>
            <div className="ui grid">
              <h3 className="ui red inverted header">Moves : </h3>
              {moves.map((m) => (
                <p>{m}</p>
              ))}
            </div>
            <div className="ui grid">
              <h3 className="ui red inverted header">Height : </h3>
              <p>{height}</p>
            </div>
            <div className="ui grid">
              <h3 className="ui red inverted header">Weight : </h3>
              <p>{weight}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokeDetails;
