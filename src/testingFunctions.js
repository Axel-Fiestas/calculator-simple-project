const isDigitNumber = (value) => {
  const number = parseInt(value, 10);

  return number >= 0 && number <= 9 ? true : false;
};

console.log(isDigitNumber(1));
console.log(isDigitNumber("2"));
console.log(isDigitNumber("ñ"));
console.log(isDigitNumber(""));
