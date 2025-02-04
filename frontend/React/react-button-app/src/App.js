import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  <div className="App">
    <header className="App-header">
      <h3 data-testid="counter">{count}</h3>
      <div>
        <button
          data-testid="minus-button"
          disabled={disabled}
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          disabled={disabled}
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        style={{ backgroundColor: "blue" }}
        data-testid="on/off-button"
        onClick={() => setDisabled((prev) => !prev)}
      >
        on/off
      </button>
    </header>
  </div>;
}

export default App;
