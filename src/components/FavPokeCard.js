import React,{useState} from "react";

const FavPokeCard = () => {
    const [wait,setWait] = useState(true);
  return (
    <div>
      <div className="ui container">
        <h1 className="ui orange header">Your Favorites</h1>
        {wait ? (
          <div className="ui active inverted dimmer">
            <div className="ui large text loader">Wait Pokemon's Loading</div>
          </div>
        ) : (
          <>
            <div className="ui two column grid">
              {pokemons.map((pokemon, id) => {
                return <PokeCard key={id} pokemon={pokemon} />;
              })}
            </div>
            <div className="ui grid container">
              <a
                className="circular ui tiny icon red button "
                onClick={prevUrl}
              >
                <i className="left arrow icon"></i>
              </a>
              <a
                className=" circular ui tiny right icon red button"
                onClick={nextUrl}
              >
                <i className="right arrow icon"></i>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavPokeCard;
