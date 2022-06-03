alert("Welcome to the Dice Rolling Program that will roll a random number between 1-6, 1-12 and 1-20 respectively..");

var randomNumber1To6 = (Math.floor(Math.random() * 6)) + 1;
var randomNumber1To12 = (Math.floor(Math.random() * 12)) + 1;
var randomNumber1To20 = (Math.floor(Math.random() * 20)) + 1;

function randomResults (rN1To6, rN1To12, rN1To20) {
    alert("The random numbers generated are " + rN1To6 + ", " + rN1To12 + " & " + rN1To20 + " respectively.");
}

randomResults (randomNumber1To6, randomNumber1To12, randomNumber1To20);