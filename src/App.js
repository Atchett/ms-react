import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "John", age: 44 },
      { name: "Bobs", age: 3 },
      { name: "Leo", age: 6 }
    ]
  };

  switchNameHandler = () => {
    console.log("Was clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
        />
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>
          I like racing.
        </Person>
      </div>
    );
  }
}

export default App;
