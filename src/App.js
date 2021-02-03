import React from "react";
import { Route,Switch, Link } from "react-router-dom";
import "./App.css";
import PokeData from "./components/PokeData";

class App extends React.Component {
  render() {
    return (
        <div className="ui container">
          <Switch>
            <Route path="/home" component={PokeData} exact />
            <Route path="/home/favorites" />
            <Route path="/home/{pokemon_name}/details" />
          </Switch>
        </div>
    );
  }
}

export default App;
