const DISPLAY = document.querySelector("#display");
const INPUTS = document.querySelectorAll("#button");
const RESULT = document.querySelector("#result");
const CLEAR = document.querySelector("#clear");

// Version simplifier mais moins sécuriser

INPUTS.forEach((input) => {
  input.addEventListener("click", () => {
    DISPLAY.value += input.value;
  });
});

RESULT.addEventListener("click", () => {
  const result = DISPLAY.value;
  DISPLAY.value = "";
  DISPLAY.value = eval(result);
});

CLEAR.addEventListener("click", () => {
  DISPLAY.value = "";
});

// Version Plus robuste et sécuriser

// let firstNumber = "";
// let currentOperator = "";

// NUMBERS.forEach((number) => {
//   number.addEventListener("click", () => {
//     DISPLAY.value += number.value;
//   });
// });

// OPERATORS.forEach((operator) => {
//   operator.addEventListener("click", () => {
//     if (operator.value === "C") {
//       DISPLAY.value = "";
//       firstNumber = "";
//       currentOperator = "";
//     } else if (operator.value === "=" && firstNumber && currentOperator) {
//       const result = calculated(firstNumber, currentOperator, DISPLAY.value);
//       DISPLAY.value = result;
//       firstNumber = result;
//       currentOperator = "";
//     } else if (DISPLAY.value) {
//       firstNumber = DISPLAY.value;
//       currentOperator = operator.value;
//       DISPLAY.value = "";
//     }
//   });
// });

// const calculated = (firstNumber, currentOperator, secondNumber) => {
//   const firstNum = Number(firstNumber);
//   const secondNum = Number(secondNumber);
//   if (currentOperator === "+") return firstNum + secondNum;
//   if (currentOperator === "-") return firstNum - secondNum;
//   if (currentOperator === "×") return firstNum * secondNum;
//   if (currentOperator === "/") return firstNum / secondNum;
//   return 0;
// };
