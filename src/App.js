import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

function CurrentNumberDisplayed({ number }) {
  return <h1>{number}</h1>;
}

function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [numbers, setNumbers] = useState([]);

  const updateNumber = (newNumber) => {
    setCurrentNumber((n) => (n = newNumber));
  };

  const addNumber = (number) => {
    setNumbers((n) => [...n, number]);
  };

  return (
    <div>
      <CurrentNumberDisplayed number={currentNumber} />
      <KeyboardPad
        numbers={numbers}
        addNumber={addNumber}
        updateNumber={updateNumber}
        actualNumber={currentNumber}
      />
      <ul>
        {numbers.map((n) => (
          <p>{n}</p>
        ))}
      </ul>
    </div>
  );
}

function KeyboardPad({ numbers, addNumber, updateNumber, actualNumber }) {
  const [initStatus, setInitStatus] = useState(true);

  const concatNumber = (value, nextValue) => {
    return value + nextValue;
  };

  const stringToNumber = (number) => {
    return Number(number);
  };

  const reset = () => {
    setInitStatus(true);
    updateNumber("0");
  };

  const handleButtonClick = (symbol) => {
    // Add the current number to the numbers array after the state update
    useEffect(() => {
      if (symbol === "+") {
        let sum = 0;
        numbers.forEach((el) => {
          sum += el;
        });

        updateNumber(sum.toString());
      }
    }, [numbers]);

    // Enqueue the state update
    addNumber(stringToNumber(actualNumber));

    //const result = sum(operation[0], operation[1]);
    //updateNumber(result.toString());
    //resetOperation();
    //addToNumberInArrayOfNumbersToOperate(result);

    //switch (symbol) {
    //  case "+":
    //    operation.forEach(sumOperation);
    //    //sum between 2 numbers in array,
    //    //the result has been saved
    //    updateNumber(result.toString());
    //    //the result is displayed
    //    operation = [];
    //    //the operation array is clenaded
    //    operation.push(result);
    //    //the result was introduced in operation array
    //
    //    console.log(operation);
    //  default:
    //    console.log("a");
    //    break;
    //}

    //reset();
  };

  const numberButtonClick = (numberSelected) => {
    if (initStatus === true) {
      setInitStatus(false);
      updateNumber(numberSelected);
    } else {
      const newNumber = concatNumber(actualNumber, numberSelected);
      console.log(newNumber);
      updateNumber(newNumber);
    }
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
        <button onClick={() => numberButtonClick("7")}>7</button>
        <button onClick={() => numberButtonClick("8")}>8</button>
        <button onClick={() => numberButtonClick("9")}>9</button>
        <button>x</button>
      </div>

      <div className="pad_row">
        <button onClick={() => numberButtonClick("4")}>4</button>
        <button onClick={() => numberButtonClick("5")}>5</button>
        <button onClick={() => numberButtonClick("6")}>6</button>
        <button>-</button>
      </div>

      <div className="pad_row">
        <button onClick={() => numberButtonClick("1")}>1</button>
        <button onClick={() => numberButtonClick("2")}>2</button>
        <button onClick={() => numberButtonClick("3")}>3 </button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>

      <div className="pad_row">
        <button onClick={() => handleButtonClick("")}>+/-</button>
        <button onClick={() => numberButtonClick("0")}>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}
export default App;
