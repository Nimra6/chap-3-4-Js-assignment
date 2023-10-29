// // ARRAYS
// let marks = [12, 13, 14, 15, 16, null, "not"]
// console.log(marks)
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[6])
// console.log(marks[7])
// console.log(marks.length)
// marks[7] = 18
// marks[0] = 18
// console.log(marks)
// console.log(typeof marks)
// let fruits = ["apple", "mango", "orange", "banana"]
// fruits.splice(2, 0, "cherry")
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// fruits[2] = "strawberry"
// console.log(fruits)


// let vege = [1, 2, 3, 4, 5,]
// let b = vege.toString()
// console.log(b, typeof b)

// let c = vege.join("and")
// console.log(c, typeof c)
// let r = vege.push(8)
// console.log(vege, r)

// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// Practice exercise 3.1

// Create an array to use as your shopping list with 3 items
// const shoppingList = ["Milk", "Bread", "Apples"];

// // Check your list length in the console
// console.log("List length:", shoppingList.length);

// // Update "Bread" to "Bananas"
// const indexOfBread = shoppingList.indexOf("Bread");
// if (indexOfBread !== -1) {
//   shoppingList[indexOfBread] = "Bananas";
// }

// // Output your entire list to the console
// console.log("Updated Shopping List:", shoppingList);
// Practice exercise 3.1
// Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
const shopping = ["Milk", "Bread", "Apples"];

// Check your list length in the console.
console.log("List length:", shopping.length);

// Update "Bread" to "Bananas."
const indexOfBread = shopping.indexOf("Bread");
if (indexOfBread !== -1) {
  shopping[indexOfBread] = "Bananas";
}

// Output your entire list to the console.
console.log("Updated Shopping List:", shopping);


// Practice exercise 3.2
// Create an empty array to use as a shopping list
const shoppingList = [];

// Add Milk, Bread, and Apples to your list
shoppingList.push("Milk", "Bread", "Apples");

// Update "Breads" with Bananas and Eggs
const indexOfBreads = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
  shoppingList.splice(indexOfBreads, 1, "Bananas", "Eggs");
}

// Remove the last item from the array and output it into the console
const removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);

// Sort the list alphabetically
shoppingList.sort();

// Find and output the index value of Milk
const indexOfMilk = shoppingList.indexOf("Milk");
console.log("Index of Milk:", indexOfMilk);

// After Bananas, add Carrots and Lettuce
const indexOfBananas = shoppingList.indexOf("Bananas");
if (indexOfBananas !== -1) {
  shoppingList.splice(indexOfBananas + 1, 0, "Carrots", "Lettuce");
}

// Create a new list containing Juice and Pop
const newItems = ["Juice", "Pop"];

// Combine both lists, adding the new list twice to the end of the first list
shoppingList.push(...newItems, ...newItems);

// Get the last index value of Pop and output it to the console
const indexOfPop = shoppingList.lastIndexOf("Pop");
console.log("Last index of Pop:", indexOfPop);

// Output the final shopping list
console.log("Final Shopping List:", shoppingList);



// Practice exercise 3.3

// Create an array containing three values: 1, 2, and 3
const originalArray = [1, 2, 3];

// Nest the original array into a new array three times
const nestedArray = [originalArray, originalArray, originalArray];

// Output the value 2 from one of the arrays into the console
console.log("Value of 2 from one of the arrays:", nestedArray[0][1]);

// Practice exercise 3.4

// Create a new object for the car
const myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue",
  forSale: true
};

// Create a variable to hold the string value "color"
let propertyName = "color";

// Use the variable within square bracket notation to assign a new value to the "color" property
myCar[propertyName] = "Red";

// Use the same variable to assign a new property string value, such as "forSale"
propertyName = "forSale";

// Use bracket notation again to assign a new value to the "forSale" property
myCar[propertyName] = false;

// Output make and model into the console
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);

// Output the value of forSale into the console
console.log("For Sale:", myCar.forSale);


// Practice exercise 3.5
// Create an object named people with an empty friends array
const people = {
  friends: []
};

// Create three variables containing friend objects
const friend1 = {
  firstName: "John",
  lastName: "Doe",
  ID: 1
};

const friend2 = {
  firstName: "Jane",
  lastName: "Smith",
  ID: 2
};

const friend3 = {
  firstName: "Alice",
  lastName: "Johnson",
  ID: 3
};

// Add the three friends to the friends array
people.friends.push(friend1, friend2, friend3);

// Output the people object to the console
console.log(people);
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// Manipulating an array

// Remove the first item and the last item.
theList.shift();
theList.pop();

// Add FIRST to the start of the array.
theList.unshift("FIRST");

// Assign hello World to the fourth item value.
theList[3] = "hello World";

// Assign MIDDLE to the third index value.
theList[2] = "MIDDLE";

// Add LAST to the last position in the array.
theList.push("LAST");

// Output the transformed array to the console.
console.log(theList);

// Company product catalog

// Create an array to hold an inventory of store items
const inventory = [];

// Create three items, each with the properties of name, model, cost, and quantity
const item1 = {
  name: "Smartphone",
  model: "X-1000",
  cost: 499.99,
  quantity: 20
};

const item2 = {
  name: "Laptop",
  model: "UltraBook",
  cost: 899.99,
  quantity: 10
};

const item3 = {
  name: "Headphones",
  model: "Wireless Pro",
  cost: 149.99,
  quantity: 30
};

// Add all three objects to the main array using push() method
inventory.push(item1, item2, item3);

// Log the inventory array to the console
console.log("Inventory:");
console.log(inventory);

// Access the quantity element of the third item and log it to the console
const thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item:", thirdItemQuantity);

// chapter number 4
// Practice exercise 4.1

// Step 1: Create a variable with a Boolean value.
var myVariable = true;

// Step 2: Output the value of the variable to the console.
console.log("The value of myVariable is: " + myVariable);

// Step 3: Check whether the variable is true and if so, output a message to the console.
if (myVariable) {
  console.log("myVariable is true!");
}

// Step 4: Add another if statement with an ! in front of the variable to check whether the condition is not true.
if (!myVariable) {
  console.log("myVariable is not true!");
} else {
  console.log("myVariable is true with the else statement!");
}

// Step 5: Change the variable to the opposite to see how the result changes.
myVariable = false;

console.log("The value of myVariable is now: " + myVariable);

if (myVariable) {
  console.log("myVariable is true!");
}

if (!myVariable) {
  console.log("myVariable is not true!");
} else {
  console.log("myVariable is true with the else statement!");
}
// Practice exercise 4.2

// Step 1: Create a prompt to ask the user's age.
var userAge = prompt("Please enter your age:");

// Step 2: Convert the response from the prompt to a number.
userAge = parseInt(userAge);

// Step 3: Declare a message variable to hold the console message for the user.
var message;

// Step 4: If the input age is equal to or greater than 21, set the message variable.
if (userAge >= 21) {
  message = "You are confirmed for entry to the venue and can purchase alcohol.";
}
// Step 5: If the input age is equal to or greater than 19 but less than 21, set the message variable.
else if (userAge >= 19) {
  message = "You are confirmed for entry to the venue but cannot purchase alcohol.";
}
// Step 6: Provide a default else statement to set the message variable to deny entry if none of the above are true.
else {
  message = "You are denied entry to the venue.";
}

// Step 7: Output the response message variable to the console.
console.log(message);

// Practice exercise 4.3

// Step 1: Create a Boolean value for an ID variable (true for valid, false for invalid).
var isIDValid = true; // You can change this to false to test an invalid ID.

// Step 2: Using a ternary operator, create a message variable that checks the validity of the ID.
var message = isIDValid ? "You are allowed to enter the venue." : "You are not allowed to enter the venue.";

// Step 3: Output the response to the console.
console.log(message);

// Practice exercise 4.4

// Generate a random number between 0 (inclusive) and 9 (inclusive).
let randomNumber = Math.random(); // random number between 0 (inclusive) and 1 (exclusive)
randomNumber = randomNumber * 10; // random number between 0 (inclusive) and 10 (exclusive)
randomNumber = Math.floor(randomNumber); // random number between 0 and 9 (inclusive)

console.log(randomNumber); // Output the random number to the console

// Practice exercise 4.5
// Step 1: Create a variable called prize and use a prompt to ask the user to set the value between 0 and 10.
var prize = prompt("Select a number between 0 and 10 to win a prize:");

// Step 2: Convert the prompt response to a number data type.
prize = parseInt(prize);

// Step 3: Create a variable for the output message.
var outputMessage = "My Selection: ";

// Step 4: Using a switch statement, provide a response for the selected number.
var prizeMessage;
switch (prize) {
  case 0:
    prizeMessage = "Sorry, no prize for 0.";
    break;
  case 1:
    prizeMessage = "Congratulations! You won a small prize for selecting 1.";
    break;
  case 2:
    prizeMessage = "Congratulations! You won a medium prize for selecting 2.";
    break;
  case 3:
    prizeMessage = "Congratulations! You won a large prize for selecting 3.";
    break;
  case 4:
  case 5:
  case 6:
    prizeMessage = "Wow, you won a combined prize for selecting 4, 5, or 6!";
    break;
  default:
    prizeMessage = "Invalid selection. Please choose a number between 0 and 10.";
}

// Step 6: Output the message back to the user by concatenating your prize variable strings and the output message string.
console.log(outputMessage + prizeMessage);

// Evaluating a number game 
// Step 1: Ask the user to enter a number.
var userNumber = parseFloat(prompt("Enter a number:"));

// Step 2: Define a dynamic number value in your code.
var dynamicNumber = 42; // You can change this value to whatever you want.

// Step 3: Compare the user's number with the dynamic number.
if (userNumber > dynamicNumber) {
  console.log("Your number is greater than the dynamic number.");
} else if (userNumber === dynamicNumber) {
  console.log("Your number is equal to the dynamic number.");
} else {
  console.log("Your number is less than the dynamic number.");
}
// Friend checker game
// Step 1: Ask the user to enter a name.
var userName = prompt("Please enter your name:");

// Step 2: Use a switch statement to check if the name matches known names.
var message;

switch (userName.toLowerCase()) {
  case "alice":
  case "bob":
  case "charlie":
    message = "You are a friend!";
    break;
  default:
    message = "I don't know you.";
}

// Step 3: Output the result to the console.
console.log(message);

// Rock Paper Scissors game 
// Step 1: Create an array that contains the variables Rock, Paper, and Scissors.
var options = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random selections for the player and the computer.
var playerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2 for Rock, Paper, or Scissors
var computerSelection = Math.floor(Math.random() * 3);

// Step 3: Create a variable to hold a response message to the user.
var responseMessage = "Player: " + options[playerSelection] + " vs. Computer: " + options[computerSelection] + "\n";

// Step 4: Check if it's a tie (both selections are the same).
if (playerSelection === computerSelection) {
  responseMessage += "It's a tie!";
}
// Step 5: Apply game logic to determine the winner.
else {
  if (
    (playerSelection === 0 && computerSelection === 2) || // Rock beats Scissors
    (playerSelection === 1 && computerSelection === 0) || // Paper beats Rock
    (playerSelection === 2 && computerSelection === 1)    // Scissors beats Paper
  ) {
    responseMessage += "You win!";
  } else {
    responseMessage += "Computer wins!";
  }
}

// Step 6: Output the game result to the console.
console.log(responseMessage);
