import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/counter.css";

function Counter(props) {
  let classes = getBadgeClasses();

  return (
    <div>
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        Increase
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        DELETE
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  function formatCount() {
    const { value } = props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
