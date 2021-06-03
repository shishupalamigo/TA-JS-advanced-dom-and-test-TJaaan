function add(...numbers) {
  return numbers.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }, 0);
};

function subtract() {}

function sum() {}

function multiply() {}

function power() {}

function factorial() {}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
