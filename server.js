// Imports
const inquirer = require('inquirer');
// Functions for making db queries.
const { addDepartment, listDepartments, addRole, listRoles, addEmployee, listEmployees, updateEmployee } = require('./src/queryFunctions');
// Contants for actions.
// const { VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } = require('./src/constants');
// Questions for prompts.
const { menuOptions, addDepartmentQuestions, addRoleQuestions } = require('./src/questions');
const { db } = require('./src/dbconn')

const VIEW_ALL_DEPARTMENTS = 'View All Departments';
const VIEW_ALL_ROLES = 'View All Roles';
const VIEW_ALL_EMPLOYEES = 'View All Employees';
const ADD_DEPARTMENT = 'Add Department';
const ADD_ROLE = 'Add Roles';
const ADD_EMPLOYEE = 'Add Employee';
const UPDATE_EMPLOYEE = 'Update Employee';

// // Make db connection
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'password',
//         database: 'cms_db'
//     },
//     console.log(`Connected to the cms_db database.`)
// );


const displayMenuOptions = () => {
    inquirer.prompt(menuOptions)
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
                    promptRole();
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
    inquirer.prompt(addDepartmentQuestions)
        .then(({ name }) => {
            addDepartment(name)
            .then(displayMenuOptions);
        });
};

const promptRole = () => {
    listDepartments()
    .then( (deptData) => {
        const roleQuestions = addRoleQuestions(deptData)

        inquirer.prompt(roleQuestions)
        .then( ( { name, salary, departmentName } ) => {
            const department = deptData.find((department) => {
                return department.name = departmentName;
            });

            addRole(name, salary, department.id)
            .then(displayMenuOptions);
        });
    })
    .catch( (error) => {
        console.log('xxxxxxxxxxxxxxxxxxxx', error)
    });
};

const promptEmployee = () => {

};

displayMenuOptions();




