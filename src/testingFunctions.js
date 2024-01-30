//const isDigitNumber = (value) => {
//  const number = parseInt(value, 10);
//
//  return number >= 0 && number <= 9 ? true : false;
//};

let numbersToOperate = [];

const stringToNumber = (number) => {
  return Number(number);
};

const addToNumberInArrayOfNumbersToOperate = (number) => {
  numbersToOperate.push(stringToNumber(number));
};

//console.log(isDigitNumber(1));
//console.log(isDigitNumber("2"));
//console.log(isDigitNumber("ñ"));
//console.log(isDigitNumber(""));
console.log(stringToNumber("312421412"));

console.log(numbersToOperate);

addToNumberInArrayOfNumbersToOperate(stringToNumber("1"));
console.log(numbersToOperate);
addToNumberInArrayOfNumbersToOperate(stringToNumber("23"));
console.log(numbersToOperate);
