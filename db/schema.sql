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