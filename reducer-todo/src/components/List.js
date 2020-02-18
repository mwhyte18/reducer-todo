import React from "react";

export default function List(props) {
  const completed = e => {
    e.preventDefault();
    props.dispatch({ type: "ISIT_COMPLETE", data: e.target.id });
  };
  console.log("props", props);
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
