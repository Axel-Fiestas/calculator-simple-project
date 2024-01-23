import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

function Calculator() {
  return (
    <div>
      <CurrentNumber />
      <KeyboardPad />
    </div>
  );
}

function CurrentNumber() {
  const number = useState(0);

  return <h1>{number}</h1>;
}

function KeyboardPad() {
  return (
    <div className="pad">
      <div className="pad_row">
        <button>%</button>
        <button>CE</button>
        <button>C</button>
        <button>->X</button>
      </div>

      <div className="pad_row">
        <button>1/x</button>
        <button>x^2</button>
        <button>Raiz X</button>
        <button>/</button>
      </div>

      <div className="pad_row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
      </div>

      <div className="pad_row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>

      <div className="pad_row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>

      <div className="pad_row">
        <button>+/-</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}
export default App;
