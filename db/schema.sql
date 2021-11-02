DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL
);

DROP TABLE IF EXISTS role;
CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title varchar(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);

