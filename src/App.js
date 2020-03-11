import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "John", age: 44 },
      { name: "Bobs", age: 3 },
      { name: "Leo", age: 6 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    //console.log("Was clicked");
    this.setState({
      people: [
        { name: newName, age: 44 },
        { name: "Bobs", age: 3 },
        { name: "Leo", age: 6 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <button
          // can be inefficnent
          onClick={() => this.switchNameHandler("JB")}
        >
          Switch name
        </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          // more recommended approach for performance
          click={this.switchNameHandler.bind(this, "JRS")}
        />
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>
          I like racing.
        </Person>
      </div>
    );
  }
}

export default App;
