// Imports
const inquirer = require('inquirer');

// Functions for making db queries.
const { queryForGetDepartments, queryForGetRoles, queryForGetEmployees, queryForInsertDepartment, queryForInsertRole, queryForInsertEmployee, queryForUpdateEmployee } = require('./src/queryFunctions');

// Constants for actions.
const { VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } = require('./src/constants');

// Questions for prompts.
const { menuOptions, getAddDepartmentQuestions, addRoleQuestions } = require('./src/questions');

const displayMenuOptions = () => {
    inquirer.prompt(menuOptions)
        .then(({ task }) => {
            switch (task) {
                case VIEW_ALL_DEPARTMENTS:
                    viewAllDepartments();
                    break;
                case VIEW_ALL_ROLES:
                    viewAllRoles();
                    break;
                case VIEW_ALL_EMPLOYEES:
                    viewAllEmployees();
                    break;
                case ADD_DEPARTMENT:
                    addDepartment();
                    break;
                case ADD_ROLE:
                    addRole();
                    break;
                case ADD_EMPLOYEE:
                    // addEmployee();
                    break;
                case UPDATE_EMPLOYEE:
                    // updateEmployee();
                    break;
                default:
                    break;
            }
        });
};

// Query for departments, display them, then display menu options.
const viewAllDepartments = () => {
    queryForGetDepartments()
        .then((allDepartmentsData) => {
            console.table(allDepartmentsData[0]);
            displayMenuOptions();
        });
};

// Query for roles, display them, then display menu options.
const viewAllRoles = () => {
    queryForGetRoles()
        .then((allRolesData) => {
            console.table(allRolesData[0]);
            displayMenuOptions();
        });
};

// Query for employees, display them, then display menu options.
const viewAllEmployees = () => {
    queryForGetEmployees()
        .then((allEmployeesData) => {
            console.table(allEmployeesData[0]);
            displayMenuOptions();
        });
};

// Display questions for adding a department, use answer as parameter for adding department.
const addDepartment = () => {
    const addDepartmentQuestions = getAddDepartmentQuestions();
    inquirer.prompt(addDepartmentQuestions)
        .then(({ departmentName }) => {
            queryForInsertDepartment(departmentName)
                .then(displayMenuOptions);
        });
};

// Display questions for adding a role by first getting list of department names and using them
// as choices in questions.  Take user's response as parameter for adding a role.
const addRole = () => {
    queryForGetDepartments()
        .then((allDepartmentData) => {
            const roleQuestions = addRoleQuestions(allDepartmentData[0])
            inquirer.prompt(roleQuestions)
                .then( ({ roleName, salary, departmentName }) => {
                    const department = allDepartmentData[0].find((department) => {
                        return department.name === departmentName;
                    });
                    queryForInsertRole(roleName, salary, department.id)
                        .then(displayMenuOptions);
                });
        });
};

// const promptEmployee = () => {
// };

displayMenuOptions();


