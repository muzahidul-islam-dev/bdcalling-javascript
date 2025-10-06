const num1 = 5;
const num2 = 10;
const operator = '+';

if (operator === "+") {
    console.log("Result is :", num1 + num2);
} else if (operator === "-") {
    console.log("Result is :", num1 - num2);
} else if (operator === "*") {
    console.log("Result is :", num1 * num2);
} else if (operator === "/") {
    if (num2 !== 0) {
        console.log("Result is :", num1 / num2);
    } else {
        console.log("The number is not divided by zero");
    }
} else {
    console.log("Incorrect oparator");
}