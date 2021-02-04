import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsOfPokemon } from "../actions";

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
  useEffect(() => {
    dispatch(detailsOfPokemon(props.match.params.name));
  }, []);
  return (
    <div className="ui container">
      <p></p>
      <h1 className="ui red header">{name.toUpperCase()}</h1>
      <div className="ui small images">
        <img class="ui medium image" src={image.front_default} />
        <img class="ui medium image" src={image.back_default} />
      </div>
      <div className='ui inverted segment'>
          <p></p>
          <div className='ui grid'>
          <h3 className="ui red inverted header">Experience : </h3>
            <p>{exp}</p>
          </div>
          <div className='ui grid'>
          <h3 className="ui red inverted header">Abilities : </h3>
           {ability.map(a => <p>{a}</p>)}
          </div>
          <div className='ui grid'>
          <h3 className="ui red inverted header">Type : </h3>
            {type.map(t => <p>{t}</p>)}
          </div>
          <div className='ui grid'>
          <h3 className="ui red inverted header">Moves : </h3>
            {moves.map(m => <p>{m}</p>)}
          </div>
          <div className='ui grid'>
          <h3 className="ui red inverted header">Height : </h3>
            <p>{height}</p>
          </div>
          <div className='ui grid'>
          <h3 className="ui red inverted header">Weight : </h3>
            <p>{weight}</p>
          </div>
      </div>
    </div>
  );
};

export default PokeDetails;
