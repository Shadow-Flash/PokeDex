import React from "react";
import { Route,Switch } from "react-router-dom";
import "./App.css";
import PokeData from "./components/PokeData";
import PokeDetails from "./components/PokeDetails";

class App extends React.Component {
  render() {
    return (
        <div className="ui container">
          <Switch>
            <Route path="/home" component={PokeData} exact />
            <Route path="/home/favorites" />
            <Route path="/home/:name/details" component={PokeDetails}/>
          </Switch>
        </div>
    );
  }
}

export default App;
