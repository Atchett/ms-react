import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  // runs once
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("some alert");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] useEffect - cleanup");
    };
  }, []);

  // runs on every cycle
  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2");
    return () => {
      console.log("[Cockpit.js] useEffect 2 - cleanup");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.people.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.people.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>Some text in here</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle people
      </button>
    </div>
  );
};

export default Cockpit;
