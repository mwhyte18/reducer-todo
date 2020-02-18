import React from "react";

export default function List(props) {
  const completed = e => {
    e.preventDefault();
    props.dispatch({ type: "ISIT_COMPLETE", payload: e.target.id });
  };
  return (
    <div className="list">
      {props.state.map(item => {
        return (
          <p
            className={`${item.completed ? "finished" : ""}`}
            id={item.id}
            onClick={completed}
          >
            {item.item}
          </p>
        );
      })}
    </div>
  );
}
