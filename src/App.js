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
    otherState: "some other value",
    showPeople: false
  };

  deletePersonHandler = personId => {
    // creates a copy
    const people = [...this.state.people];
    people.splice(personId, 1);
    this.setState({ people: people });
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  nameChangedHandler = event => {
    this.setState({
      people: [
        { name: "John", age: 44 },
        { name: event.target.value, age: 3 },
        { name: "Leo", age: 6 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "#fff",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                key={index}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
          {/* <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
          />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}
          >
            I like racing.
          </Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <button
          // can be inefficnent
          onClick={this.togglePeopleHandler}
          style={style}
        >
          Toggle people
        </button>
        {people}
      </div>
    );
  }
}

export default App;
