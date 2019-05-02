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

// Use the function to add transactions

addTransaction('May-2', -500)
addTransaction('May-13', 1200)
addTransaction('May-15', -100)
addTransaction('May-21', -359)
addTransaction('May-29', 2200)


// Add function to show balance status

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


// Add function to show transactions

function showTransactions(map, beginningBalance){

  console.log(`Begining Balane: ${beginningBalance}`);

  // Get each transaction from the Map and displa the date(key[0])
  // Display the type (- / +) by determinging if pos/neg.
  // Display the amount of changed.
  // Display new total balance.

  let endingbalance = beginningBalance

  for (let [date, value] of transactions) {  
    if (value > 0) {
      var transactionType = 'Deposit';
    }
    else {
      var transactionType = 'Withdrawal';
    }

    endingbalance += value;

    if (endingbalance < 0) {
      endingbalance -= 25;
    }

    console.log(`Date: ${date}, Type: ${transactionType}, Amount Change: $${value}`);
    console.log(`Ending Balance: $${endingbalance}`);
  }
}

console.log(showTransactions(transactions, 10))

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
let customerInfo = {
    'Account Holder': accountHolder,
    'Account Number': accountNumber,
    'Business Name': businessName,
    'Addresses': addresses,
    'Phone Numbers': phoneNumbers,
    'Transactions': transactions,
    'Starting Balance': 2600
}

// Function to add customer attributes

function addCustomerAttributes(favMelon, pets=0) {
  customerInfo['Favorite Melon'] = favMelon;
  customerInfo['Pet'] = pets;
}


// Add attributes for this user
addCustomerAttributes('Casabas', 6);
console.log(customerInfo);

// ///////////////////////////////////////////////////////
// Getting a Business Loan
function businessLoan(annualIncome, customerInfo) {
  
  //if annual income < 100,000 AND customerInfo[favorite Melon] === Melon || pets > 5
    //CONSOLE.LOG(5%)
    //ELSE 
      //CONSOLE.LOG(8%)
  
  if (annualIncome < 100000) {
    if (customerInfo['Favorite Melon'] === 'Casaba' || customerInfo['Pet'] > 5) {
    console.log('5%');
    } else {
    console.log('8%');
    }
  }

  if (annualIncome > 100000 && annualIncome < 200000) {
    if (customerInfo['Favorite Melon'] === 'Casaba' || customerInfo['Pet'] > 5) {
      console.log('4%');
    } else {
      console.log('7%');
    }
  }
  
  if (annualIncome > 200000) {
    console.log('4%')
  }
}

// Function to return loan rate
businessLoan(150000, customerInfo)

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




