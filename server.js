const inquirer = require("inquirer");
const prompts = require("./db/prompts");
const connection = require("./db/connection");
const models = require("./models");


// console.log('Welcome to Your Employee Tracking System');

// Main Menu
const departments = [
    { name: 'Engineering', value: 'Engineering' },
    { name: 'Finance', value: 'Finance' },
    { name: 'Interconnected', value: 'Interconnected' },
    { name: 'Sales', value: 'Sales' },
    { name: 'Legal', value: 'Legal' }
];
onst promptUser = () => {
    inquirer
    .prompt = {
        type: "list",
        name: "department",
        message: "Which department would you like to view?",
        choices: departments

    };
    }
    ((results) => {
        console.log(results);
        // const { results } = results;

        if (results.menu === "View All Employees") {
            models.viewAllEmployees();
        }

        if (results.menu === "View All Departments") {
            models.viewAllDepartments();
        }

        if (results.menu === "View All Employees By Department") {
            models.viewEmployeesByDepartment();
        }

        if (results.menu === "Add Employee") {
            models.addEmployee();
        }

        if (results.menu === "Remove Employee") {
            models.removeEmployee();
        }

        if (results.menu === "Update Employee Role") {
            models.updateEmployeeRole();
        }

        if (results.menu === "Update Employee Manager") {
            models.updateEmployeeManager();
        }

        if (results.menu === "View All Roles") {
            models.viewAllRoles();
        }

        if (results.menu === "Add Role") {
            models.addRole();
        }

        if (results.menu === "Remove Role") {
            models.removeRole();
        }

        if (results.menu === "Add Department") {
            models.addDepartment();
        }

        if (results.menu === "View Department Budgets") {
            models.viewDepartmentBudget();
        }

        if (results.menu === "Remove Department") {
            models.removeDepartment();
        }

        if (results.menu === "Exit") {
            connection.end();
        }
    });
promptUser();
// module.exports = server;