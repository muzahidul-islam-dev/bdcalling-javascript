const num1 = 25;
const num2 = 42;
const num3 = 17;

if (num1 > num2 && num1 > num3) {
    console.log("Maximum Numer is: ", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("Maximum Numer is: ", num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("Maximum Numer is: ", num3);
} else {
    console.log("All number is equal or two number is equal");
}