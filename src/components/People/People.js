import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[People.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[People.js] componentWillReceiveProps", props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[People.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[People.js] getSnapshotBeforeUpdate");
    return null;
  }

  // componentWillUpdate() {
  //   console.log("[People.js] componentWillUpdate");
  // }

  componentDidUpdate() {
    console.log("[People.js] componentDidUpdate");
  }

  render() {
    console.log("[People.js] rendering...");
    return this.props.people.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
        />
      );
    });
  }
}

export default People;
