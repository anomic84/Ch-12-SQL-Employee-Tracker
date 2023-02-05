const inquirer = require('inquirer');
const mysql = require('mysql2');
require("dotenv").config();

let currentRoles = [];
let currentEmployees = [];

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.PW,
        database: "employee_db",
    },
    console.log(`Connected to the employee_db database.`)
);

db.connect(function (err) {
    if (err) return console.log(err);
    startingQuestions();
})

// Start of the app that lets user decide what they want to do via prompt
const startingQuestions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'startingquestions',
            message: 'What would you like to do?',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update departments',
                'Update employee information'
            ]
        }
    ])
        //Filters the choices to their seperate functions to carry out chosen act
        .then((answers) => {
            switch (answers.task) {
                case "View departments":
                    viewDepartments();
                    break;
                case 'View roles':
                    viewRoles();
                    break;
                case 'View employees':
                    viewEmployees();
                    break;
                case 'Add department':
                    addDepartment();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Update departments':
                    updateDepartments();
                    break;
                case 'Update employee information':
                    updateEmployee();
                    break;
            }
        });
}