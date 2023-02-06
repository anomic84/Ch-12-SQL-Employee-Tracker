const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require("./connect");

require("dotenv").config();

let currentRoles = [];
let currentEmployees = [];
const empSql = "Select * FROM employee"
const roleSql = `SELECT name, id FROM department`;



connection.connect(function (err) {
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
    connection.query(
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
    connection.query(
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
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, department, roles.salary, CONCAT(mgr.first_name, mgr.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee mgr ON employee.manager_id = mgr.id",
        (err, results) => {
            if (err) return console.log(err);
            console.table(results);
            InquirerPrompt();
        });

}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: "Name the department",
        }
    ])
        .then(answer => {
            const mysql = "INSERT INTO department (name) VALUES (?)";
            connection.query(mysql, answer.department, (err, results) => {
                if (err) return console.log(err);
                console.log('Added' + answer.department + "to departments");
                viewDepartments();
            })
        })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roles',
            message: "What is the role?",
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the yearly salary?",
        },

    ])
        .then(answer => {
            // turns results into parameters for later query
            const params = [answer.roles, answer.salary];

            connection.query(roleSql, (err, data) => {
                if (err) return console.log(err);
                const department_var = data.map(({ name, id }) => ({ name: name, value: id }));

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'department_var',
                        message: "What department is this role in?",
                        choices: department_var
                    }
                ])
                    .then(department_varChoice => {
                        const department_var = department_varChoice.department_var;
                        params.push(department_var);
                        const mysql = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)'

                        connection.query(mysql, params, (err, result) => {
                            if (err) return console.log(err);
                            console.log('Added' + answer.roles + "to roles");
                            showRoles();
                        });
                    });
            });
        });
};


const addEmployee = () => {

}

const updateDepartments = () => {

}

const updateEmployee = () => {

}
