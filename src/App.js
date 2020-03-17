import React, { Component } from "react";
import classes from "./App.css";
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
    let people = null;
    let btnClasses = "";

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
      btnClasses = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>React app</h1>
        <p className={assignedClasses.join(" ")}>Some text in here</p>
        <button className={btnClasses} onClick={this.togglePeopleHandler}>
          Toggle people
        </button>
        {people}
      </div>
    );
  }
}

export default App;
