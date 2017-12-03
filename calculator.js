/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply(num1, num2) {
   return num1 * num2;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

 function add(num1, num2) {
     return num1 + num2;
 }

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract(num1, num2) {
    return num1 - num2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 function divide(num1, num2) {
     return num1 / num2;
 }


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

let numerator1 = document.getElementById("number1");
let numerator2 = document.getElementById("number2");

function calculateOutput(value){
    document.getElementById("answer").value = value;
}

// Multiplication button
document.getElementById("multiply").addEventListener("click", function() {
    let calculation = calculate(+numerator1.value, +numerator2.value, multiply);
    calculateOutput(calculation);
});

// Add button
document.getElementById("add").addEventListener("click", function() {
    let calculation = calculate(+numerator1.value, +numerator2.value, add);
    calculateOutput(calculation);
});

// Subtract button
document.getElementById("subtract").addEventListener("click", function() {
    let calculation = calculate(+numerator1.value, +numerator2.value, subtract);
    calculateOutput(calculation);
});

// Divide button
document.getElementById("divide").addEventListener("click", function() {
    let calculation = calculate(+numerator1.value, +numerator2.value, divide);
    calculateOutput(calculation);
});

