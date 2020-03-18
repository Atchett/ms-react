import React, { PureComponent } from "react";
import Person from "./Person/Person";

class People extends PureComponent {
  // Depracted
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[People.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // Depracted
  // componentWillReceiveProps(props) {
  //   console.log("[People.js] componentWillReceiveProps", props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[People.js] shouldComponentUpdate");
  //   if (nextProps.people !== this.props.people) {
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[People.js] getSnapshotBeforeUpdate");
    return null;
  }

  // Depracted
  // componentWillUpdate() {
  //   console.log("[People.js] componentWillUpdate");
  // }

  componentDidUpdate() {
    console.log("[People.js] componentDidUpdate");
  }

  componentWillUnmount() {
    // do clean up in here
    console.log("[People.js] componentWillUnmount");
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
