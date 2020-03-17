import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "John", age: 44 },
      { id: 2, name: "Bobs", age: 3 },
      { id: 3, name: "Leo", age: 6 }
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

  nameChangedHandler = (event, id) => {
    // find the index of the person we need in the person array in state
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    // create a copy of the person in state
    const person = {
      ...this.state.people[personIndex]
    };

    // update the person name
    person.name = event.target.value;

    // re add back to the person array
    const people = [...this.state.people];
    people[personIndex] = person;

    // update the state
    this.setState({
      people: people
    });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    let classes = [];
    if (this.state.people.length <= 2) {
      classes.push("red");
    }
    if (this.state.people.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>React app</h1>
        <p className={classes.join(" ")}>Some text in here</p>
        <button onClick={this.togglePeopleHandler}>Toggle people</button>
        {people}
      </div>
    );
  }
}

export default App;
