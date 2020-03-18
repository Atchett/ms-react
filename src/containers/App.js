import React, { Component } from "react";
import classes from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    people: [
      { id: 1, name: "John", age: 44 },
      { id: 2, name: "Bobs", age: 3 },
      { id: 3, name: "Leo", age: 6 }
    ],
    otherState: "some other value",
    showPeople: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // Depracted
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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
    console.log("[App.js] render");
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
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPeople={this.state.showPeople}
            peopleLength={this.state.people.length}
            clicked={this.togglePeopleHandler}
          />
        ) : null}
        {people}
      </WithClass>
    );
  }
}

export default App;
