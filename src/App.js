import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PokeData from "./components/PokeData";
import PokeDetails from "./components/PokeDetails";
import FavPokeCard from "./components/FavPokeCard";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Switch>
          <Route path="/" component={PokeData} exact />
          <Route path="/favorites" component={FavPokeCard} />
          <Route path="/:name/details" component={PokeDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
