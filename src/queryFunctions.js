const { db } = require('./dbconn')

// Constants for queries.
const LIST_DEPARTMENTS_SQL = 'SELECT * FROM department';
const LIST_ROLES_SQL = 'SELECT * FROM role';
const LIST_EMPLOYEES_SQL = 'SELECT * FROM employee';

const ADD_DEPARTMENT_SQL = 'INSERT INTO department (name) VALUES (?)';
const ADD_ROLE_SQL = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
const ADD_EMPLOYEE_SQL = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

const UPDATE_EMPLOYEE_SQL = 'UPDATE employee SET role_id = ? WHERE id = ?';


const queryForGetDepartments = () => {
    return db.promise().query(LIST_DEPARTMENTS_SQL);
};

const queryForGetRoles = () => {
    return db.promise().query(LIST_ROLES_SQL);
};

const queryForGetEmployees = () => {
    return db.promise().query(LIST_EMPLOYEES_SQL);
};

const queryForInsertDepartment = (name) => {
    return db.promise().query(ADD_DEPARTMENT_SQL, [name], (err, result) => {
        if (err) console.log(`Error occurred when adding department ${name}:`, err);
        else console.log(`Successfully added department ${name}:`, result);
    });
};

const queryForInsertRole = (role, salary, departmentId) => {
    return db.promise().query(ADD_ROLE_SQL, [role, salary, departmentId], (err, result) => {
        if (err) console.log(`Error occurred when adding role ${role}:`, err);
        else console.log(`Successfully added role ${role}:`, result);
    });
};

const queryForInsertEmployee = (firstName, lastName, roleId, managerId) => {
    db.query(ADD_EMPLOYEE_SQL, [firstName, lastName, roleId, managerId], (err, result) => {
        if (err) console.log(`Error occurred when adding employee ${lastName}:`, err);
        else console.log(`Successfully added employee ${lastName}:`, result);
    });
};

const queryForUpdateEmployee = (roleId, employeeId) => {
    db.query(UPDATE_EMPLOYEE_SQL, [roleId, employeeId], (err, result) => {
        if (err) console.log(`Error occurred when updating employeeId ${employeeId}:`, err);
        else console.log(`Successfully updated employeeId ${employeeId}:`, result);
    });
};

module.exports = {
    queryForInsertDepartment: queryForInsertDepartment,
    queryForGetDepartments: queryForGetDepartments,
    queryForInsertRole: queryForInsertRole,
    queryForGetRoles: queryForGetRoles,
    queryForInsertEmployee: queryForInsertEmployee,
    queryForGetEmployees: queryForGetEmployees,
    queryForUpdateEmployee: queryForUpdateEmployee
};


