// Problem 04 : Nested Friends
const myScore = 80;
const friendScore = 39;
let message = "";

if(myScore >= 80){
    if(friendScore >= 80){
        console.log("Lets go for a lunch");
    }else if(friendScore >= 60){
        console.log("Good luck next time");
    }else if(friendScore >= 40){
        console.log("Friend's message is unseen");
    }else{
        console.log("Blocked my friend");
    }
}else{
    console.log("I am going to home, will sleep and act sad");
}