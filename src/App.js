import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { name: "John", age: 44 },
      { name: "Bobs", age: 3 },
      { name: "Leo", age: 6 }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    setPeopleState({
      people: [
        { name: "JB", age: 44 },
        { name: "Bobs", age: 3 },
        { name: "Leo", age: 7 }
      ]
    });
  };

  console.log(peopleState, otherState);

  return (
    <div className="App">
      <h1>React app</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={peopleState.people[0].name}
        age={peopleState.people[0].age}
      />
      <Person
        name={peopleState.people[1].name}
        age={peopleState.people[1].age}
      />
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age}>
        I like racing.
      </Person>
    </div>
  );
};

export default App;
