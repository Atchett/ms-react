import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person name="John" age="44" />
        <Person name="Bobs" age="3" />
        <Person name="Leo" age="6">
          I like racing.
        </Person>
      </div>
    );
  }
}

export default App;
