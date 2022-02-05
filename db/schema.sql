--Drops database in case of TEST --
DROP DATABASE IF EXISTS employees_db;
-- Creates the "employee_db" database --
CREATE DATABASE employess_db;

-- Selects the "employees_db database" --
USE employees_db;

-- Creates the table "departments" within employees_db --
CREATE TABLE departments (
      -- Creates a numeric column called "id" which will automatically increment its default value  --
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Creates the table "roles" within employees_db --
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30),
    department_id INT,
    salary INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

-- Creates the table "employee" within company_db --
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    department_id INT,
    manager_name VARCHAR(30) NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);