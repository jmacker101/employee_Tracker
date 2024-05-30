const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const Employee = require('./db');
const inquirer = require('inquirer');
init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "City of Pawnee" }).render();

  console.log(logoText);

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    // TODO- Create first question user will see- "What would you like to do?"
  ])
    .then((res) => {
      const logoText = prompt("what would you like to do?")
      // TODO- Create a variable to store the user's choice
      const usersChoice = document.querySelector("userchoice");


      usersChoice = () => {
        const name = prompt("What is your name?");
        alert(`Hello ${logoText}}, nice to see you!`);
        // headingA.textContent = `Welcome ${name}`; is this needed?
      }
    })
};
// TODO- Create a switch statement to call the appropriate function depending on what the user chose
function handleUserChoice(choice) {
  switch (choice) {
    case 'employee':
     Employee();
      
      break;
    case 'role':
      role();
      break;
    case 'department':
      department();
      break;
    default:
      console.log('Invalid choice');
  }
}

function Employee() {
  // import and call find all employee functions
  Employee(); {
    inquirer.prompt({
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Find all employees', 'Add employee', 'Update employee role', 'Exit'],
      name: 'action',
    }).then((answer) => {
      switch (answer.action) {
        case 'Find all employees':
          findAllEmployees();
          break;
        // Additional cases for other actions can be added here
        default:
          connection.end();
          break;
      }
    });
  }
  console.log('first name?');
  
}
promptUser();

function role() {
  // import and call find roles functions
  // File: roles.js
  console.log('Finding roles...');
}

// Export the function
// is this the right 
module.exports = findRoles;
  console.log('what is your role?');

// File: roles.js
// Import the findRoles function
const findRoles = require('./roles.js');

// Define the role function
function role() {
    // Call the roles function
    findRoles();
    console.log('What is your role?');
}

// Call the role function
role();

function department() {
  // import and call find all department
  // File: department.js
function findAll() {
  console.log('Finding all department codes...');
}

// Export the function
// what do i do with the export finAll? do i get rid of it or do i move it to combine it?
module.exports = findAll;
  console.log('what is your department?');
}
// File: department.js
// Import the findAll function
const findAll = require('./department.js');

// Define the role function
function role() {
    // Call the findAll function
    findAll();
    console.log('What is your role?');
}

// Call the role function
role();

module.exports = { viewAllEmployees, viewAllDepartment, viewAllRole}

// my usage
handleUserChoice(); // to remind me to call function
  
  
  


  

// TODO- Create a function to View all employees
function viewEmployees() { }

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// TODO- Create a function to Update an employee's role

// BONUS- Create a function to Update an employee's manager

// TODO- Create a function to View all roles

// TODO- Create a function to Add a role

// BONUS- Create a function to Delete a role

// TODO- Create a function to View all deparments

// TODO- Create a function to Add a department

// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// TODO- Create a function to Add an employee

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
