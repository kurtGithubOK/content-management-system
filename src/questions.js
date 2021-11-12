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

// Questions for adding a department.
const getAddDepartmentQuestions = () => {
    return [
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter department name:'
        }
    ]
};

// Questions for adding a role.
const addRoleQuestions = (allDepartmentData) => {
    const departmentNames = allDepartmentData.map((departmentData) => {
        return departmentData.name;
    });

    return [
        {
            type: 'input',
            name: 'roleName',
            message: 'Enter role name:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter role salary:'
        },
        {
            type: 'list',
            name: 'departmentName',
            message: 'Select department for role:',
            choices: departmentNames
        },
    ];
}

// Questions for adding an employee.
const addEmployeeQuestions = (allRoleData, allEmployeeData) => {
    const roleNames = allRoleData.map((roleData) => {
        return roleData.title;
    });

    const managerNames = allEmployeeData.map((employeeData) => {
        return employeeData.first_name + ' ' + employeeData.last_name;
    });

    return [
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter employee first name:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter employee last name:'
        },
        {
            type: 'list',
            name: 'roleName',
            message: 'Select employee role:',
            choices: roleNames
        },
        {
            type: 'list',
            name: 'manager',
            message: 'Select employee manager:',
            choices: managerNames
        }
    ];
};

const updateEmployeeQuestions = (allEmployeeData, allRoleData) => {
    const employeeNames = allEmployeeData.map( (employee) => {
        return employee.first_name + ' ' + employee.last_name;
    });

    const roleNames = allRoleData.map( (role) => {
        return role.title;
    })

    return [
        {
            type: 'list',
            name: 'employeeName',
            message: 'Select employee to update:',
            choices: employeeNames
        },
        {
            type: 'list',
            name: 'roleName',
            message: 'Select role to update employee to:',
            choices: roleNames
        }
    ];
};

module.exports = {
    menuOptions: menuOptions,
    getAddDepartmentQuestions: getAddDepartmentQuestions,
    addRoleQuestions: addRoleQuestions,
    addEmployeeQuestions: addEmployeeQuestions,
    updateEmployeeQuestions: updateEmployeeQuestions
}
