const mysql = require('mysql2');
const db = require('./db/connection');
const table = require('console.table');
const inquirer = require('inquirer')

//Present user with question
const startQuestion = () => {
    inquirer
        .prompt([
            {
                name: "response",
                type: "list",
                message: "What do you want to do:",
                choices: [
                    "View all Departments",
                    "View all Roles",
                    "View all Employees",
                    "Add a Department",
                    "Add a Role",
                    "Add an Employee",
                    "Update a Employee role",

                ],
            },
        ])
        .then(({ response }) => {
            if (response == 'View all Departments') {
                console.log("welcome");
                viewAllDepartments();
            } else if (response == 'View all Roles') {
                viewAllRoles();
            } else if (response == 'View all Employees') {
                viewAllEmployee();
            } else if (response == 'Add a Department') {
                addDepartment();
            } else if (response == 'Add a Role') {
                addRole();
            } else if (response == 'Add an Employee') {
                addEmployee();
            } else if (response == 'Update an Employee role') {
                updateEmployee();
            };
        });
};

// Connecting databases to mysql
db.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Sucessfully connected to mysql")
        startQuestion();
    }
});

// View all departments - READ - "SELECT * FROM (table_name]";
async function viewAllDepartments() {
    try {
        const departments = await db.query('SELECT * FROM departments')

        console.table(departments);

    } catch (err) {
        //console.error(err);
    }
    startQuestion();
};

//view all roles - READ - "SELECT * FROM (table_name]";
async function viewAllRoles() {
    const roles = await db.query('SELECT * FROM roles') // we know method works, so dont

    console.table(roles);                               // need to have try { & catch {  
    startQuestion();
}

// view al employees - READ - "SELECT * FROM (table_name]";
async function viewAllEmployee() {

    const employee = await db.query('SELECT * FROM employee')

    console.table(employee);
    startQuestion();
}
// Adds a new department to the department table
function addDepartment() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "Enter the name of the new department:",
            },
        ])
        .then((response) => {
            const query = `INSERT INTO departments (department_name) VALUES (?)`;
            db.query(query, response.department, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    startQuestion();
                }
            });
        });
}

// add a role - CREATE - "INSERT [table_name] (col1, col2) VALUES (value, value2)""
async function addRole() {

    let departments = await db.query('SELECT * FROM departments;');

   // let departmentsArray = {};

    // departments.forEach(department => {
    //     departmentsArray[department.department_name] = department.id;
    // });

    let departmentID = departments.map(department => {
        return {
            name: department.department_name,
            value: department.id
        }
    });
    
    inquirer
        .prompt([
            {
                name: "role",
                type: "input",
                message: "Enter the job title",
            },
            {
                name: "salery",
                type: "number",
                message: "Enter the salery of the new rolw"
            },
            {
                name: "department_name",
                type: "list",
                message: "Choose a department for this role",
                choices: departmentID
            },
        ])
        .then (async (response) => {
            // Take the user's answers and go INSERT them into the 'role' table
            db.query ('INSERT INTO roles (job_title, salary, department_id) VALUES (?,?,?)',
            [response.role,response.salery,response.department_name],
            
           (err, results) => {
                if (err) {
                  console.log(err);
                } else {
                  startQuestion();
                }
              }
            )
        });
    }
            
        
    

    // SELECT the existing department put for the 'department' table



// add an employee - CREATE - "INSERT" [table_name]
async function addEmployee (){

    try {

    
    let roles = await db.query('SELECT * FROM roles;');

    let roleID = roles.map(role => {
        return {
            name: role.job_title,
            value: role.id
        }
         });
    let employees = await db.query('SELECT * FROM employee;');

    let employeeID = employees.map(employee => {
        return {
            name: employee.first_name + " " + employee.last_name,
            
            value: employee.id
        }  
    });

    inquirer
    .prompt([
        {
            name: "firstname",
            type: "input",
            message: "Enter the employee's first name:",
          },
          {
            name: "lastname",
            type: "input",
            message: "Enter the employee's last name:",
          },
          {
            name: "role",
            type: "list",
            message: "Choose a role for this employee",
            choices: roleID,
          },
          {
            name: "manager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: employeeID,
          },
        ])
        .then (async (response) => {
            console.log(response);
            db.query( 'INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)',
            [response.firstname,response.lastname,response.role,response.manager],
            (err, results) => {
                if (err) {
                  console.log(err);
                } else {
                  startQuestion();
                }
              }
            )
          });
        } catch (err) {
            console.log(err)
        }
      }
     

//update an employee 
async function updateEmployee(){
    inquirer
    .prompt ([
        {
            name: "employee_name",
            type: "list",
            message: "  Select the employee you want to update",
            choices: employeeID
          },
          {
            name: "job_title",
            type: "list",
            message: "Enter the employee's last name:",
            choices: rolesID
          },

        
    ])
}
