import React from "react";
import "./App.css";
import PokeData from "./components/PokeData";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <PokeData />
      </div>
    );
  }
}

export default App;
