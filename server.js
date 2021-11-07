// Imports
const inquirer = require('inquirer');

// Functions for making db queries.
const { queryForGetDepartments, queryForGetRoles, queryForGetEmployees, queryForInsertDepartment, queryForInsertRole, queryForInsertEmployee, queryForUpdateEmployee } = require('./src/queryFunctions');

// Contants for actions.
const { VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } = require('./src/constants');

// Questions for prompts.
const { menuOptions } = require('./src/questions');

// Functions for formatting data for display in console.
const { formatDepartmentData } = require('./src/formatters');

const displayMenuOptions = () => {
    inquirer.prompt(menuOptions)
        .then(({ task }) => {
            switch (task) {
                case VIEW_ALL_DEPARTMENTS:
                    viewAllDepartments();
                    break;
                case VIEW_ALL_ROLES:
                    // listRoles();
                    break;
                case VIEW_ALL_EMPLOYEES:
                    // listEmployees();
                    break;
                case ADD_DEPARTMENT:
                    // promptDepartment();
                    break;
                case ADD_ROLE:
                    // promptRole();
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

const viewAllDepartments = () => {
    queryForGetDepartments()
        .then(( allDepartmentsData) => {
            // console.log('hereeeeeeeeeeeee', allDepartmentsData[0])
            formatDepartmentData(allDepartmentsData[0]);
            displayMenuOptions();
        });
};

// const promptDepartment = () => {
//     inquirer.prompt(addDepartmentQuestions)
//         .then(({ name }) => {
//             addDepartment(name)
//             .then(displayMenuOptions);
//         });
// };

// const promptRole = () => {
//     listDepartments()
//     .then( (deptData) => {
//         const roleQuestions = addRoleQuestions(deptData)

//         inquirer.prompt(roleQuestions)
//         .then( ( { name, salary, departmentName } ) => {
//             const department = deptData.find((department) => {
//                 return department.name = departmentName;
//             });

//             addRole(name, salary, department.id)
//             .then(displayMenuOptions);
//         });
//     })
//     .catch( (error) => {
//         console.log('xxxxxxxxxxxxxxxxxxxx', error)
//     });
// };

// const promptEmployee = () => {
// };

displayMenuOptions();




