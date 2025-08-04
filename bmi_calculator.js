//Problem 02 : BMI calculator
const weight = 70;
const height = 1.82;
const bmi = weight/(height*height);
let message = "";

if(bmi < 18.5){
    message = "underweight";
}else if(bmi < 25){
    message = "normal";
}else if(bmi < 30){
    message = "overweight";
}else{
    message = "obese";
}

console.log(`Your bmi is : ${bmi.toFixed(2)}`);
console.log(`You are ${message}`);