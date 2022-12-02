let operators = {
  add: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
      // console.log(2);
      return num1 + num2;
    } catch (e) {
      console.error(e);
    }
  },
  subtract: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
      return num1 - num2;
    } catch {
      (e) => console.error(e);
    }
  },
  multiply: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
      return num1 * num2;
    } catch {
      (e) => console.error(e);
    }
  },
  divide: function (num1, num2) {
    try {
      if (num2 == 0) {
        throw "can't divide by zero";
      }
      this._checkForNumber(num1, num2);
      return num1 + num2;
    } catch {
      (e) => console.error(e);
    }
  },
  _checkForNumber: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw "Parameter is not a number ";
    }
  },
};
let result = operators.add(2, 2);
console.log(result);
