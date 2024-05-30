const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

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
  console.log('first name?');
  //
}

function role() {
  // import and call find roles functions
  console.log('what is your role?');
}

function department() {
  // import and call find all department
  console.log('what is your department?');
}

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
