DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department(
	id INT NOT NULL,
    name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role(
	id INT NOT NULL,
	title varchar(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee(
	id INT NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);

