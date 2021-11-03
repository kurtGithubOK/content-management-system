// Imports
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Constants for queries.
const LIST_DEPARTMENTS_SQL = 'SELECT * FROM department';
const LIST_ROLES_SQL = 'SELECT * FROM role';
const LIST_EMPLOYEES_SQL = 'SELECT * FROM employee';

const ADD_DEPARTMENT_SQL = 'INSERT INTO department (name) VALUES (?)';
const ADD_ROLE_SQL = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
const ADD_EMPLOYEE_SQL = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

const UPDATE_EMPLOYEE_SQL = 'UPDATE employee SET role_id = ? WHERE id = ?';

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
    return db.promise().query(ADD_DEPARTMENT_SQL, [name], (err, result) => {
        if (err) console.log(`Error occurred when adding department ${name}:`, err);
        else console.log(`Successfully added department ${name}:`, result);
    });
};

const listDepartments = () => {
    db.query(LIST_DEPARTMENTS_SQL, function (err, results) {
        console.log('LIST_DEPARTMENTS results:', results);
    });
};

const addRole = (role, salary, departmentId) => {
    return db.promise().query(ADD_ROLE_SQL, [role, salary, departmentId], (err, result) => {
        if (err) console.log(`Error occurred when adding role ${role}:`, err);
        else console.log(`Successfully added role ${role}:`, result);
    });
};

const listRoles = () => {
    db.query(LIST_ROLES_SQL, function (err, results) {
        console.log('LIST_ROLES results:', results);
    });
};

const addEmployee = (firstName, lastName, roleId, managerId) => {
    db.query(ADD_EMPLOYEE_SQL, [firstName, lastName, roleId, managerId], (err, result) => {
        if (err) console.log(`Error occurred when adding employee ${lastName}:`, err);
        else console.log(`Successfully added employee ${lastName}:`, result);
    });
};

const listEmployees = () => {
    db.query(LIST_EMPLOYEES_SQL, function (err, results) {
        console.log('LIST_EMPLOYEES:', results);
    });
};

const updateEmployee = (roleId, employeeId) => {
    db.query(UPDATE_EMPLOYEE_SQL, [roleId, employeeId], (err, result) => {
        if (err) console.log(`Error occurred when updating employeeId ${employeeId}:`, err);
        else console.log(`Successfully updated employeeId ${employeeId}:`, result);
    });
};

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const VIEW_ALL_DEPARTMENTS = 'View All Departments';
const VIEW_ALL_ROLES = 'View All Roles';
const VIEW_ALL_EMPLOYEES = 'View All Employees';
const ADD_DEPARTMENT = 'Add Department';
const ADD_ROLE = 'Add Roles';
const ADD_EMPLOYEE = 'Add Employee';
const UPDATE_EMPLOYEE = 'Update Employee';



const displayMenuOptions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What do you want to do?',
            choices: [VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE]
        }
    ])
        .then(({ task }) => {
            switch (task) {
                case VIEW_ALL_DEPARTMENTS:
                    listDepartments();
                    break;
                case VIEW_ALL_ROLES:
                    listRoles();
                    break;
                case VIEW_ALL_EMPLOYEES:
                    listEmployees();
                    break;
                case ADD_DEPARTMENT:
                    promptDepartment();
                    break;
                case ADD_ROLE:
                    addRole();
                    break;
                case ADD_EMPLOYEE:
                    addEmployee();
                    break;
                case UPDATE_EMPLOYEE:
                    updateEmployee();
                    break;
                default:
                    break;
            }
        }
        );
};

const promptDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Department name?'
        }
    ])
        .then(({ name }) => {
            addDepartment(name)
            .then(displayMenuOptions);
        });
};

const promptRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Role name?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Role salary?'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Role department id?'
        },
    ])
    .then( ( { name, salary, departmentId } ) => {
        addRole(name, salary, departmentId)
        .then(displayMenuOptions);
    });

};

const promptEmployee = () => {

};





displayMenuOptions();




