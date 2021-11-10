// Imports
const inquirer = require('inquirer');

// Functions for making db queries.
const { queryForGetDepartments, queryForGetRoles, queryForGetEmployees, queryForInsertDepartment, queryForInsertRole, queryForInsertEmployee, queryForUpdateEmployee } = require('./src/queryFunctions');

// Constants for actions.
const { VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } = require('./src/constants');

// Questions for prompts.
const { menuOptions, getAddDepartmentQuestions, addRoleQuestions, addEmployeeQuestions } = require('./src/questions');

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
                    addEmployee();
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
                .then(({ roleName, salary, departmentName }) => {
                    const department = allDepartmentData[0].find((department) => {
                        return department.name === departmentName;
                    });
                    queryForInsertRole(roleName, salary, department.id)
                        .then(displayMenuOptions);
                });
        });
};

// Display questions for adding an employee by getting a list of all roles,
// then a list of all managers, then generating prompts for adding an
// employee based on those values for roles and managers.
const addEmployee = () => {
    // Get all role data.
    queryForGetRoles()
        .then((allRoleData) => {
            // Get all employee data.
            queryForGetEmployees()
                .then((allEmployeeData) => {
                    // Now pass role and employee data to function that generates questions for adding an employee.
                    const employeeQuestions = addEmployeeQuestions(allRoleData[0], allEmployeeData[0])
                    inquirer.prompt(employeeQuestions)
                        .then(({ firstName, lastName, roleName, manager }) => {
                            const role = allRoleData[0].find((roleData) => {
                                return roleData.title === roleName;
                            });

                            const employee = allEmployeeData[0].find((employeeData) => {
                                return employeeData.first_name + ' ' + employeeData.last_name === manager;
                            });

                            queryForInsertEmployee(firstName, lastName, role.id, employee.id)
                                .then(displayMenuOptions);


                        });

                })

        })
};

displayMenuOptions();


