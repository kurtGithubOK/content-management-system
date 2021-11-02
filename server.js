// Imports
const mysql = require('mysql2');

// Constants for queries.
const LIST_DEPARTMENTS = 'SELECT * FROM department';
const LIST_ROLES = 'SELECT * FROM role';
const LIST_EMPLOYEES = 'SELECT * FROM employee';

const ADD_DEPARTMENT = 'INSERT INTO department (name) VALUES (?)';
const ADD_ROLE = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
const ADD_EMPLOYEE = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

const UPDATE_EMPLOYEE = 'UPDATE employee SET role_id = ? WHERE id = ?';

// Make db connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cms_db'
    },
    console.log(`Connected to the cms_db database.`)
);

const addDepartment = (name) => {
    db.query(ADD_DEPARTMENT, [name], (err, result) => {
        if (err) console.log(`Error occurred when adding department ${name}:`, err);
        else console.log(`Successfully added department ${name}:`, result);
    });
};

const listDepartments = () => {
    db.query(LIST_DEPARTMENTS, function (err, results) {
        console.log('LIST_DEPARTMENTS results:', results);
    });
};

const addRole = (role, salary, departmentId) => {
    db.query(ADD_ROLE, [role, salary, departmentId], (err, result) => {
        if (err) console.log(`Error occurred when adding role ${role}:`, err);
        else console.log(`Successfully added role ${role}:`, result);
    });
};

const listRoles = () => {
    db.query(LIST_ROLES, function (err, results) {
        console.log('LIST_ROLES results:', results);
    });
};

const addEmployee = (firstName, lastName, roleId, managerId) => {
    db.query(ADD_EMPLOYEE, [firstName, lastName, roleId, managerId], (err, result) => {
        if (err) console.log(`Error occurred when adding employee ${lastName}:`, err);
        else console.log(`Successfully added employee ${lastName}:`, result);
    });
};

const listEmployees = () => {
    db.query(LIST_EMPLOYEES, function (err, results) {
        console.log('LIST_EMPLOYEES:', results);
    });
};

const updateEmployee = (roleId, employeeId) => {
    db.query(UPDATE_EMPLOYEE, [roleId, employeeId], (err, result) => {
        if (err) console.log(`Error occurred when updating employeeId ${employeeId}:`, err);
        else console.log(`Successfully updated employeeId ${employeeId}:`, result);
    });
};




