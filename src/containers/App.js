import React, { Component } from "react";
import classes from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
