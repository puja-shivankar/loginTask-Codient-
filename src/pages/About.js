import React, { useState } from "react";
import { Dashboard } from "./dashboard/Dashboard";

export const About = () => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
  });

  const changeHandler = (event) => {
    setState(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state.name);
  };
  return (
    <Dashboard>
      <form onSubmit={submitHandler}>
        Name: <input type="text" value={state.name} onChange={changeHandler} />
        LastName:{" "}
        <input type="text" value={state.lastname} onChange={changeHandler} />
        <button>submit</button>
      </form>
    </Dashboard>
  );
};
