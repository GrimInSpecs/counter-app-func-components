import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  let [counters, setCounter] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  let handleDelete = (counterId) => {
    setCounter(counters.filter((c) => c.id !== counterId));
  };

  let handleReset = () => {
    setCounter(
      counters.map((c) => {
        c.value = 0;
        return c;
      })
    );
  };

  let handleIncrement = (counter) => {
    counters = [...counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setCounter(counters);
  };

  return (
    <React.Fragment>
      <h1>Practicing React : Funtional components</h1>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <Counters
        counters={counters}
        onReset={handleReset}
        onIncrement={handleIncrement}
        onDelete={handleDelete}
      ></Counters>
    </React.Fragment>
  );
}

export default App;
