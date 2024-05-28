-- Drop the database if it exists
DROP DATABASE IF EXISTS employees;

-- Create the new database
CREATE DATABASE employees;

-- Connect to the database
\c employees

-- TODO- write an SQL command to Create the department table
CREATE TABLE department (
department_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  
);

-- TODO- write an SQL command to Create the role table
CREATE TABLE role (
role_id SERIAL PRIMARY KEY
  title VARCHAR(255),
  salary VARCHAR(255),
department_id 
  FOREIGN KEY (department_id)
  REFERENCES department(department_id)
);
-- TODO- write an SQL command to Create the employee table

CREATE TABLE employees (
employees_id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255), 
role_id INTEGER,
 FOREIGN KEY (role_id),
  REFERENCES role(role_id),
manager_id INTEGER,
FOREIGN KEY (employees_id),
  REFERENCES employees(employees_id),
);