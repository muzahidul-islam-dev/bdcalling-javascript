const year = 2004;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("This year is leap year");
} else {
    console.log("This is not leap year");
}