-- Drops previous db --
DROP DATABASE IF EXISTS employees_db;

-- Creates employees_db --
CREATE DATABASE employees_db;

-- Uses created employees_db --
USE employees_db;

-- Creates table of departments
CREATE TABLE department (
    -- makes ID which has to be an integer, can't be 0, automatically increments, and makes it the primary key
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Creates table for role
 CREATE TABLE role (
    -- creates roll_id which increments with every employee
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    -- pulls from department's id
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
);

-- creates table for employee
 CREATE TABLE employee (
    -- gves employee id
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    -- links roll id
    role_id INT NOT NULL,
    -- links manager id
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);




