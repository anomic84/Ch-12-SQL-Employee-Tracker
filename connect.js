const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.PW,
        database: "employee_db",
    },
    console.log(`Connected to the employee_db database.`)
);