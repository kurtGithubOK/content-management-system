// Questions for prompts kept in this separate file.

// Constants.
const { VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE } = require('./constants');

// Options displayed upon initial prompt.
const menuOptions = [{
    type: 'list',
    name: 'task',
    message: 'What do you want to do?',
    choices: [VIEW_ALL_DEPARTMENTS, VIEW_ALL_ROLES, VIEW_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_EMPLOYEE]
}];

// const addDepartmentQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Enter department name:'
//     }
// ];

// const addRoleQuestions = (departmentData) => {
//     const choices = departmentData.map( (department) => {
//         return department.name;
//     });
// console.log('tttttttttttttttt', choices)

//     return [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Enter role name:'
//         },
//         {
//             type: 'input',
//             name: 'salary',
//             message: 'Enter role salary:'
//         },
//         {
//             type: 'input',
//             name: 'department',
//             message: 'Select department for role:',
//             choices: choices
//         },
//     ];
// } 


// const addEmployeeQuestions = [
//         {
//             type: 'input',
//             name: 'firstName',
//             message: 'Enter employee first name:'
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: 'Enter employee last name:'
//         },
//         {
//             type: 'input',
//             name: 'role',
//             message: 'Select employee role:',
//             choices: ['aaa', 'bbb']
//         },
//         {
//             type: 'input',
//             name: 'manager',
//             message: 'Select employee manager:',
//             choices: ['ddddd', 'cccc']
//         }        
// ];



module.exports = {
    menuOptions: menuOptions,
    // addDepartmentQuestions: addDepartmentQuestions,
    // addRoleQuestions: addRoleQuestions
}
