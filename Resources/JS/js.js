alert("Welcome to the Dice Rolling Program that will roll a random number between 1-6, 1-12 and 1-20..");

function randomResults (randomNumbers) {
    var randomResult = (Math.floor(Math.random() * randomNumbers)) + 1;
    alert("The random number rolled is " + randomResult + ".");
}

randomResults (6);
randomResults (12);
randomResults (20);