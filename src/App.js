import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
      console.log(error)
    }
  };

  return (
    <div className="calculator">
      <h1 className="title-cal">Calculator</h1>
      <h1 className="result-ans">Result: {result}</h1>
      <div>
        <div>
          <input
            className="output"
            type="text"
            value={input}
            onChange={handleInput}
            readOnly
          />
        </div>
      </div>
      <div className="keypad">
        <div className="row">
          <button className="digit" onClick={() => setInput(input + "7")}>
            7
          </button>
          <button className="digit" onClick={() => setInput(input + "8")}>
            8
          </button>
          <button className="digit" onClick={() => setInput(input + "9")}>
            9
          </button>
          <button className="operator" onClick={() => setInput(input + "/")}>
            /
          </button>
        </div>
        <div className="row">
          <button className="digit" onClick={() => setInput(input + "4")}>
            4
          </button>
          <button className="digit" onClick={() => setInput(input + "5")}>
            5
          </button>
          <button className="digit" onClick={() => setInput(input + "6")}>
            6
          </button>
          <button className="operator" onClick={() => setInput(input + "*")}>
            *
          </button>
        </div>
        <div className="row">
          <button className="digit" onClick={() => setInput(input + "1")}>
            1
          </button>
          <button className="digit" onClick={() => setInput(input + "2")}>
            2
          </button>
          <button className="digit" onClick={() => setInput(input + "3")}>
            3
          </button>
          <button className="operator" onClick={() => setInput(input + "-")}>
            -
          </button>
        </div>
        <div className="row">
          <button className="digit" onClick={() => setInput(input + "0")}>
            0
          </button>
          <button className="function-key" onClick={calculateResult}>
            =
          </button>
          <button className="function-key" onClick={clearInput}>
            AC
          </button>
          <button className="operator" onClick={() => setInput(input + "+")}>
            +
          </button>
        </div>
      </div>
      <footer>
        <div className="copyright">
          <p>&copy; 2024 Azeem Rafique. All rights reserved.</p>
          <p>This is Calculator showcasing my work.</p>
          <p> Contact: azeemrafique47@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
