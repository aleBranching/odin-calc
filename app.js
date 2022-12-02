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
    } catch (e) {
      console.error(e);
    }
  },
  multiply: function (num1, num2) {
    try {
      this._checkForNumber(num1, num2);
      return num1 * num2;
    } catch (e) {
      console.error(e);
    }
  },
  divide: function (num1, num2) {
    try {
      if (num2 == 0) {
        throw "Can't divide by zero";
      }
      this._checkForNumber(num1, num2);
      return num1 / num2;
    } catch (e) {
      console.error(e);
    }
  },
  _checkForNumber: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw "Parameter is not a number ";
    }
  },
};
// let result = operators.add(2, 2);
// console.log(result);

// update screen

let screen = document.querySelector("#screenText");
let previousValScreen = document.querySelector("#previousVal");
let clearBtn = document.querySelector("#clear");
let deleteBtn = document.querySelector("#delete");

deleteBtn.addEventListener("click", () => {
  if (firstInput) {
    firstNumber = firstNumber.slice(0, -1);
    updateScreen(firstNumber);
  } else {
    lastNumber = lastNumber.slice(0, -1);
    updateScreen(lastNumber);
  }
});

clearBtn.addEventListener("click", () => {
  reset();
  updateScreen("0");
  updatePrevValScreen(" ");
});

function updateScreen(text) {
  screen.innerText = text;
}

function updatePrevValScreen(text) {
  previousValScreen.innerText = text;
}
let firstNumber = "";
let lastNumber = "";
let registeredOperator = "";
let firstInput = true;

function reset() {
  firstNumber = "";
  lastNumber = "";
  registeredOperator = "";
  firstInput = true;
}

let numberKeys = document.querySelectorAll(".number");
let operatorKeys = document.querySelectorAll(".operator");

function compute(operator, num1, num2) {
  switch (operator) {
    case "/":
      console.log("here");
      return operators.divide(num1, num2);
    // break;
    case "*":
      return operators.multiply(num1, num2);
    // break;
    case "-":
      return operators.subtract(num1, num2);
    // break;
    case "+":
      return operators.add(num1, num2);
    // break;
  }
}
let wasEqualed = false;

numberKeys.forEach((aKey) => {
  aKey.addEventListener("click", (e) => {
    let value = e.target.dataset.func;
    if (wasEqualed) {
      console.log("here");
      updatePrevValScreen("");
      wasEqualed = false;
    }
    if (firstInput) {
      firstNumber += value;
      console.log(firstNumber);
      updateScreen(firstNumber);
    } else {
      lastNumber += value;
      console.log(lastNumber);
      updateScreen(lastNumber);
    }
  });
});

// operatorKeys.forEach((aKey) => {
//   aKey.addEventListener("click", (e) => {
//     let value = e.target.dataset.func;
//     if (value !== "=" && lastNumber !== "") {
//       firstInput = false;

//       registeredOperator = value;
//       let computed = compute(
//         registeredOperator,
//         Number(firstNumber),
//         Number(lastNumber)
//       );
//       console.log("computed", computed);
//       updateScreen(computed);
//     } else if (value !== "=") {
//       firstInput = false;
//       registeredOperator = value;
//     } else if (firstInput == false) {
//       console.log("here");
//       console.log(registeredOperator, firstNumber, lastNumber);
//       let computed = compute(
//         registeredOperator,
//         Number(firstNumber),
//         Number(lastNumber)
//       );
//       console.log("computed", computed);
//       updateScreen(computed);
//       if (registeredOperator == "=") {
//         reset();
//         firstNumber = String(computed);
//       } else {
//         firstNumber = String(computed);
//         lastNumber = "";
//         registeredOperator = value;
//         firstInput = false;
//       }
//     }
//     // TODO: need an else
//   });
// });

operatorKeys.forEach((aKey) => {
  aKey.addEventListener(
    "click",
    (e) => {
      let value = e.target.dataset.func;
      console.log(value);
      if (firstInput && value !== "=") {
        registeredOperator = value;
        firstInput = false;
        updatePrevValScreen(`${firstNumber} ${registeredOperator}`);
      } else if (firstInput == false && value == "=") {
        let computed = compute(
          registeredOperator,
          Number(firstNumber),
          Number(lastNumber)
        );
        console.log(computed);
        updatePrevValScreen(
          `${firstNumber} ${registeredOperator} ${lastNumber} =`
        );
        // wasEqualed = true;
        updateScreen(computed);
        reset();
        firstNumber = String(computed);
      } else if (firstInput == false && value !== "=") {
        let computed = compute(
          registeredOperator,
          Number(firstNumber),
          Number(lastNumber)
        );
        console.log(computed);
        updateScreen(computed);
        reset();
        firstNumber = String(computed);
        registeredOperator = value;
        firstInput = false;
        updatePrevValScreen(`${firstNumber} ${registeredOperator}`);
      }
    }
    // TODO: need an else
  );
});
