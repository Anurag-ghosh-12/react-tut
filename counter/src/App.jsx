import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 15;

  const addValue = () => {
    if (counter <= 19) counter = counter + 1;
    setCounter(counter);
    console.log("Value added", counter);
  };

  const decValue = () => {
    if (counter > 0) counter = counter - 1;
    setCounter(counter);
    console.log("Value removed", counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={decValue}>Remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
