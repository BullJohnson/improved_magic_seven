'use strict'
// William S. Johnson, Jr | 9-17-23 | DPR214 -  Improved Number Trick Magic-7

alert("Welcome to an improved version of the Magic Seven App.\nThis version continues to amuse and amaze, but involves less code.");

// Obtaining the user's number and converting it to an integer, if possible
let yourNumber = prompt("Please Enter a whole number of your choice.");
yourNumber = parseInt(yourNumber);

// Validating the user's response, to make sure it is a number
while(isNaN(yourNumber)) {
    alert("For this trick to work, your response must be a number");
    yourNumber = parseInt(prompt("Please Enter a whole number of your choice."));
}

// Working the magic (formula), behind the scenes and preparing variables for a document write
let magicSeven = 0;
let addNine = yourNumber + 9;
let timesTwo = addNine * 2;
let minusFour = timesTwo - 4;
let divideByTwo = minusFour / 2;
magicSeven = divideByTwo - yourNumber;

//Revealing the results to the user and revealing the calculations with a document write
alert("After running the number " + yourNumber + " through the magic formula, your number has been transformed to the number " + 
magicSeven + "!!!  Click 'ok' to see how it works.");
document.write("<h1>The Magic Seven Trick</h1>");
document.write("<p>The number you selected was " + yourNumber + "</p>");
document.write("<p>First we added 9 to it. So, " + yourNumber + " plus nine equals " + addNine + "</p>");
document.write("<p>Second we multiplied " + addNine + " by two. So, " + addNine + " times two equals " + timesTwo + "</p>");
document.write("<p>Next, we subtracted four from " + timesTwo + ". So, " + timesTwo + " minus four equals " + minusFour + "</p>");
document.write("<p>Then we divided it all by two. So, " + minusFour + " divided by two equals " + divideByTwo + "</p>");
document.write("<p>And finally, we subtracted the number that you originally selected, to arrive at the Magic Number:</p>");
document.write("<p>So, " + divideByTwo + " minus " + yourNumber + " equals " + magicSeven + "</p>");
