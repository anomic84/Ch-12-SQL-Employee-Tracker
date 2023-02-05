-- Drops previous db --
DROP DATABASE IF EXISTS emplyees_db;

-- Creates employees_db --
CREATE DATABASE employees_db;

-- Uses created employees_db --
USE emplyees_db;

-- Creates table of departments
CREATE TABLE department (
    -- makes ID which has to be an integer, can't be 0, automatically increments, and makes it the primary key
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

-- Creates table for roll
 CREATE TABLE role(
    -- creates roll_id which increments with every employee
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    -- pulls from department's id
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
 );

-- creates table for employee
 CREATE TABLE employee(
    -- gves employee id
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    -- links roll id
    role_id INT,
    -- links manager id
    manager_id INT,
    manager_name VARCHAR(30),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
 );