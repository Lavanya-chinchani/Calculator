import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    if (isNaN(inputValue)) {
      // Handle invalid input
      resultRef.current.innerText = "Invalid Input";
      return;
    }

    switch (operation) {
      case "add":
        setResult((prevResult) => prevResult + inputValue);
        break;
      case "subtract":
        setResult((prevResult) => prevResult - inputValue);
        break;
      case "multiply":
        setResult((prevResult) => prevResult * inputValue);
        break;
      case "divide":
        if (inputValue === 0) {
          // Handle division by zero
          resultRef.current.innerText = "Cannot divide by zero";
          return;
        }
        setResult((prevResult) => prevResult / inputValue);
        break;
      default:
        break;
    }

    inputRef.current.value = "";
    resultRef.current.innerText = result;
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
    resultRef.current.innerText = "";
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={handleOperation("add")}>Add</button>
        <button onClick={handleOperation("subtract")}>Subtract</button>
        <button onClick={handleOperation("multiply")}>Multiply</button>
        <button onClick={handleOperation("divide")}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
