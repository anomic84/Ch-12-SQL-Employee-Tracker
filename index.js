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

const viewDepartments = () => {
    db.query(
        // views name of department as "Departments" for its title from the department db
        "SELECT department.name AS Departments FROM department",
        (err, results) => {
            //console logs a table of the results
            console.table(results);
            //   goes back to start
            startingQuestions();
        }
    );
}

const viewRoles = () => {
    db.query(
        // vies the role table, goes through the role table sub catagories (title and salary) to view. Also, sets the department of roll as "Department" and links keys to department table id
        "SELECT role.title AS Role, role.salary AS Salary, department.name AS Department FROM role JOIN department ON role.department_id = department.id;",
         (err, results) => {
            console.table(results);
            //   goes back to start
            startingQuestions();
        }
    );
}

const viewEmployees = () => {
    query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(mgr.first_name, mgr.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee mgr ON employee.manager_id = mgr.id",
        (err, rows) => {
    if (err) return console.log(err);
    console.table(rows);
    InquirerPrompt();
});
    
}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const updateDepartments = () => {

}

const updateEmployee = () => {

}
