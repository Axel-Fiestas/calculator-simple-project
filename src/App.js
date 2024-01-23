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
  const [currentNumber, setCurrentNumber] = useState(0);

  const updateNumber = (newNumber) => {
    setCurrentNumber(newNumber);
  };

  return (
    <div>
      <CurrentNumber number={currentNumber} />
      <KeyboardPad updateNumber={updateNumber} />
    </div>
  );
}

function CurrentNumber({ number }) {
  //Then this reacts!
  return <h1>{number}</h1>;
}

function KeyboardPad({ updateNumber }) {
  const handleButtonClick = (value) => {
    updateNumber(7);
  };
  //When I interact with this
  return (
    <div className="pad">
      <div className="pad_row">
        <button>%</button>
        <button>CE</button>
        <button onClick={handleButtonClick}>C</button>
        <button>DELETE</button>
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
