const { db } = require('./dbconn')

// Constants for queries.
const LIST_DEPARTMENTS_SQL = 'SELECT * FROM department';
const LIST_ROLES_SQL = 'SELECT * FROM role';
const LIST_EMPLOYEES_SQL = 'SELECT * FROM employee';

const ADD_DEPARTMENT_SQL = 'INSERT INTO department (name) VALUES (?)';
const ADD_ROLE_SQL = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
const ADD_EMPLOYEE_SQL = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

const UPDATE_EMPLOYEE_SQL = 'UPDATE employee SET role_id = ? WHERE id = ?';


const addDepartment = (name) => {
    return db.promise().query(ADD_DEPARTMENT_SQL, [name], (err, result) => {
        if (err) console.log(`Error occurred when adding department ${name}:`, err);
        else console.log(`Successfully added department ${name}:`, result);
    });
};

const listDepartments = () => {
    return db.promise().query(LIST_DEPARTMENTS_SQL
        // , function (err, results) {
        // if(err) console.log('Error when listing depts', err);
        // console.log('LIST_DEPARTMENTS results:', results);
        // // return results;
    // }
    );
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

module.exports = {
    addDepartment,
    listDepartments,
    addRole,
    listRoles,
    addEmployee,
    listEmployees,
    updateEmployee
};


