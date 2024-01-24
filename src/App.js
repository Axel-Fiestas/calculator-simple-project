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
  const [currentNumber, setCurrentNumber] = useState("0");

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
  return <h1>{number}</h1>;
}

function KeyboardPad({ updateNumber }) {
  //const [number1, setNumber1] = useState(0);
  //const [number2, setNumber2] = useState(0);
  const [firstOption, setFirstOption] = useState("0");
  const [initStatus, setInitStatus] = useState(true);
  const [numbersToOperate, setNumbersToOperate] = useState([]);
  const [actualNumberAux, setActualNumberAux] = useState(0);

  const isDigitNumber = (value) => {
    const number = parseInt(value, 10);
    return number >= 0 && number <= 9 ? true : false;
  };

  const concatNumber = (value, nextValue) => {
    return value + nextValue;
  };

  const reset = () => {
    setInitStatus(true);
    updateNumber("0");
    setActualNumberAux(0);
  };

  const addToNumberInArrayOfNumbersToOperate = (number) => {
    setNumbersToOperate([...numbersToOperate, number]);
  };

  const makeConcatenation = (actualOptionSelected, initStatus) => {
    if (
      isDigitNumber(actualOptionSelected) &&
      actualOptionSelected.length >= 1 &&
      initStatus === false
    ) {
      updateNumber(concatNumber(firstOption, actualOptionSelected));
      setFirstOption(concatNumber(firstOption, actualOptionSelected));
      setActualNumberAux(
        Number(concatNumber(firstOption, actualOptionSelected))
      );
    } else {
      updateNumber(actualOptionSelected);
      setFirstOption(actualOptionSelected);
      setActualNumberAux(
        Number(concatNumber(firstOption, actualOptionSelected))
      );
    }
  };

  const handleButtonClick = (actualOptionSelected) => {
    //console.log(firstOption);

    console.log(isDigitNumber(actualOptionSelected));

    if (isDigitNumber(actualOptionSelected)) {
      if (initStatus === true) {
        setInitStatus(false);
      }
      makeConcatenation(actualOptionSelected, initStatus);
    } else {
      console.log("Se añade el numero" + actualNumberAux + " al arreglo");
      addToNumberInArrayOfNumbersToOperate(actualNumberAux);
      console.log([...numbersToOperate]);

      if (actualOptionSelected === "+") {
      }
    }

    //updateNumber(actualOptionSelected);
  };

  //When I interact with this
  return (
    <div className="pad">
      <div className="pad_row">
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={reset}>CE</button>
        <button onClick={reset}>C</button>
        <button onClick={() => handleButtonClick("")}>DELETE</button>
      </div>

      <div className="pad_row">
        <button>1/x</button>
        <button>x^2</button>
        <button>Raiz X</button>
        <button>/</button>
      </div>

      <div className="pad_row">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button>x</button>
      </div>

      <div className="pad_row">
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button>-</button>
      </div>

      <div className="pad_row">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3 </button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>

      <div className="pad_row">
        <button onClick={() => handleButtonClick("")}>+/-</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}
export default App;
