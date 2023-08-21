/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

console.log("Hello I am puttinf in an answer");


/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");

//Number of available seats
var availableFlightSeats = 7; 

//Output log of available seats on a plane
console.log("The number of seats left on this plane are" + availableFlightSeats);


console.log("Step 2:  Cost of Groceries");

//Defining the cost of groceries
var costOfGroceries = 89.50

//Output log of the cost of groceries
console.log("The cost of groceries are" + costOfGroceries);

console.log("Step 3:  Middle Initial");

//Defining middle initial
var middleInitial = "J";

//Output of the middle initial
console.log("The middile initial starts with:" + middleInitial);


console.log("Step 4:  Is it Hot Outside?");

//Defining whether or not it is hot outside
var isHotOutside = true;

//Output log of "Is it hot outside?" with true or false
console.log("Is it Hot Otuside? " + isHotOutside)


console.log("Step 5:  First Name");

//Define first name
var firstName = "Chris";

//Output of First Name
console.log("The variable firstName is: " + firstName);


console.log("Step 6:  Street Address");

//Define street address
var streetAddress = "12345 Main Street Fantasy State"

//Output log of street address
console.log("The made up street address is " +streetAddress);

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓

console.log("A customer booked 2 seats... There are only " + (availableFlightSeats - 2 ) + " seats left");


    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓

console.log("I grabbed a candy so my grocery total went up to " + "$" + (costOfGroceries + 2.15) + ".");


    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓

console.log("My brith certificate is incorrect, it should have the letter " + (middleInitial = ("'") + "Z" + ("'")) + "." );



    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    

console.log("Is the weather hot outside: " + (isHotOutside = false) );


    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓

var fullName = "John Charles Morgan";

console.log("My full name is " + (fullName) + ".");



    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓

console.log("Hi! My name is " + fullName + " and I live at " + streetAddress + ".");


    console.log('-----------Finished------------')