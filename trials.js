// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
  ['home', '510-867-5309'],
  ['mobile', '415-555-1212'],
  ['business', '415-123-4567']
  ]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information

function account_information(name, num, bus_name) {
  console.log(`Account Holder Name ${name}\n Account Holder Number ${num}\n Business Name ${bus_name}`);
}

// Add function to print all addresses, including a header
function showAddresses(arr) {

  console.log('Addresses:')

  for (const address of arr) { // must add const for the function to run
    console.log(`${address}`);
  }

}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers){
  console.log('Phone Numbers:')

  for (const[label, number]of phoneNumbers){
    console.log(`${label}: ${number}`);
  }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map([]);

// Add function to add transactions
function addTransaction(date, amount) {
  // give key value into the empty map.
  transactions.set(date, amount); 
}

addTransaction('May-2', -500)
addTransaction('May-13', 1200)
addTransaction('May-15', -100)
addTransaction('May-21', -359)
addTransaction('May-29', 2200)


// Use the function to add transactions

// Takes in one parameter. 
// For looop so taht if the acc balance is 0
// else if if account not less than zero, "warning you're close to zero balance"
// else "Thank you for your business"

function showBalanceStatus(balance){

  if (balance <= 0){
    console.log("YOU ARE OVERDRAWN");
  }
  else if (balance > 0 && balance < 20){
    console.log("Warning: You are close to zero balance.");
  }
  else{
    console.log("Thank you for your business");
  }
}
// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




