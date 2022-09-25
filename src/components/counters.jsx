import React, { useState } from "react";
import Counter from "./counter";
import "./css/counters.css";

function Counters(props) {
  return (
    <React.Fragment>
      <button onClick={props.onReset} className="btn btn-secondary m-2">
        RESET
      </button>
      <div id="container">
        {props.counters.map((counter) => (
          <Counter
            onIncrement={props.onIncrement}
            key={counter.id}
            onDelete={props.onDelete}
            counter={counter}
          >
            <h2>{counter.id}</h2>
          </Counter>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Counters;
