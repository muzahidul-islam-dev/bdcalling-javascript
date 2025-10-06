const ticketPrice = 500;
const age = 30;
let finalPrice;

if (age < 10) {
    finalPrice = 0;
} else if (age >= 10 && age <= 17) {
    finalPrice = ticketPrice * 0.5;
} else if (age >= 18 && age <= 59) {
    finalPrice = ticketPrice;
} else if (age >= 60) {
    finalPrice = ticketPrice * 0.6;
} else {
    console.log("Invalid age!");
}

if (finalPrice !== undefined) {
    console.log("Ticket Price:", finalPrice, "Taka");
}