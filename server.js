// Imports
const mysql = require('mysql2');

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

// Query department table
const LIST_DEPARTMENTS = 'SELECT * FROM department';
const LIST_ROLES = 'SELECT * FROM role';
const LIST_EMPLOYEES = 'SELECT * FROM employee';

const ADD_DEPARTMENT = 'INSERT INTO department (name) VALUES (?)';
const ADD_ROLE = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
const ADD_EMPLOYEE = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

const UPDATE_EMPLOYEE = 'UPDATE employee SET role_id = ? WHERE id = ?';


// db.query(ADD_DEPARTMENT, ['department 12'], (err, result) => {
//     if (err) console.log(err);
//     else console.log(result);
// });
// db.query(LIST_DEPARTMENTS, function (err, results) {
//     console.log('LIST_DEPARTMENTS:', results);
// });

// db.query(ADD_ROLE, ['queryRole', 22000, 1], (err, result) => {
//     if (err) console.log(err);
//     else console.log(result);
// });
// db.query(LIST_ROLES, function (err, results) {
//     console.log('LIST_ROLES:', results);
// });

// db.query(ADD_EMPLOYEE, ['kurtsxxxx', 'heimermansxxxx', 2, 1], (err, result) => {
//     if (err) console.log('Error:', err);
//     else console.log('This is result:', result);
// });
// db.query(ADD_EMPLOYEE, function (err, results) {
//     console.log('ADD_EMPLOYEE:', results);
// });

// db.query(UPDATE_EMPLOYEE, [1, 5], (err, result) => {
//     if (err) console.log('Error:', err);
//     else console.log('This is result:', result);
// });
// db.query(UPDATE_EMPLOYEE, function (err, results) {
//     console.log('UPDATE_EMPLOYEE:', results);
// });




