import React, { useReducer } from "react";
import "./App.scss";
import { initialState, Reducer } from "./reducers/Reducer";
import Todo from "./components/Todo";
import List from "./components/List";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log("hiya", state);
  return (
    <div className="App">
      <div className="content">
        <h1>My to-do list</h1>
        <Todo state={state} dispatch={dispatch} />
        <List state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
