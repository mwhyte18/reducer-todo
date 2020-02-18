import React, { useState } from "react";

const Todo = props => {
  const [thisTodo, setThisTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: thisTodo });
  };
  const handleChange = e => {
    setThisTodo(e.target.value);
  };

  const handleDelete = e => {
    e.preventDefault();
    props.dispatch({ type: "REMOVE_COMPLETE" });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.dispatch({ type: "ADD_TODO", payload: thisTodo });
          setThisTodo("");
        }}
      >
        <label>
          Add Item:{" "}
          <input name="todo" value={thisTodo} onChange={handleChange} />{" "}
        </label>
      </form>

      <button className="btn btn-1" onClick={handleSubmit}>
        Add Item
      </button>

      <button className="btn btn-1" onClick={handleDelete}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default Todo;
