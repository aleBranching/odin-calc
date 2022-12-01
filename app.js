let operators = {
  add: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
    } catch {
      (e) => console.error(e);
    }
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
    } catch {
      (e) => console.error(e);
    }
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
    } catch {
      (e) => console.error(e);
    }
    return num1 * num2;
  },
  divide: function (num1, num2) {
    try {
      if (num1 == 0 || num2 == 0) {
        throw "can't divide by zero";
      }
      this._checkForNumber(num1, num2);
    } catch {
      (e) => console.error(e);
    }
    return num1 + num2;
  },
  _checkForNumber: function (num1, num2) {
    if (typeof num1 === "number" || typeof num2 === "number") {
      throw "Parameter is not a number ";
    }
  },
};

console.log(operators.add(2, 2));
