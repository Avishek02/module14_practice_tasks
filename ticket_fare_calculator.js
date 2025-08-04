// Problem 06 : Bus ticket fare calculator
const regularFare = 800;
let fare;
const age = 29;
const isStudent = false;

if (age < 10) {
    console.log(`Your ticket is FREE! Enjoy your trip.`);
} else if (isStudent) {
    fare = regularFare / 2;
    console.log(`As a student, you receive a 50% discount. Your ticket fare is : ${fare}Tk`);
}else if (age >= 60) {
    fare = regularFare - regularFare * (15 / 100);
    console.log(`You qualify for a senior discount of 15%. Your ticket fare is : ${fare}Tk`);
} else {
    fare = regularFare;
    console.log(`Your ticket fare is : ${fare}Tk`);
}


