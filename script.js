// Define a variable to hold the current input on the calculator screen
let currentInput = '';

// Define variables to hold the first and second numbers in a calculation
let firstNum = '';
let secondNum = '';

// Define a variable to hold the selected operator
let selectedOperator = '';

// Get references to the calculator screen and buttons
const screen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.button');

// Loop through the buttons and add event listeners for click events
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the value of the clicked button
    const buttonValue = button.textContent;

    // If the clicked button is a number, add it to the current input
    if (!isNaN(buttonValue) || buttonValue === '.') {
      currentInput += buttonValue;
      screen.value = currentInput;
    }

    // If the clicked button is an operator, save the current input as the first number and store the operator
    if (['+', '-', '*', '/'].includes(buttonValue)) {
      selectedOperator = buttonValue;
      firstNum = currentInput;
      currentInput = '';
      screen.value = firstNum + selectedOperator;
    }

    // If the clicked button is the equals button, store the current input as the second number and perform the calculation
    if (buttonValue === '=') {
      secondNum = currentInput;
      currentInput = '';
      screen.value = calculate(firstNum, secondNum, selectedOperator);
    }

    // If the clicked button is the clear button, reset all variables and clear the screen
    if (buttonValue === 'C') {
      currentInput = '';
      firstNum = '';
      secondNum = '';
      selectedOperator = '';
      screen.value = '';
    }
  });
});

// Define a function to perform the calculation
function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return '';
  }
}
