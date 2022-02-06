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
                    "Add a Employee",
                    "Update a Employee role",

                ],
            },
        ])
        .then(({ response }) => {
            if (response == 'View all Departments') {
                console.log("hello");
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
        console.error(err);
    }
    startQuestion();
};

//view all roles - READ - "SELECT * FROM (table_name]";
async function viewAllRoles() {
    const roles = await db.query('SELECT * FROM roles')

    console.table(roles);
    startQuestion();

}



// view al employees - READ - "SELECT * FROM (table_name]";
async function viewAllEmployee() {

    const employee = await db.query('SELECT * FROM employee')

    console.table(employee);
    startQuestion();


}


// add a department - CREATE - "INSERT INTO [table_name]"
async function addDepartment () {
    inquirer
    .prompt ([
        {
                 name: "response",
                type: "input",
                message: "",
        }
    ])
}

// add a role - CREATE - "INSERT [table_name] (col1, col2) VALUES (value, value2)""
async function createRole() {

    // SELECT the existing department put for the 'department' table


    const departments = [
        {
            id: 1,
            name: "Marketing",
        },
        {
            id: 2,
            name: "Finance",
        },
        {
            id: 3,
            name: "Human Resources",
        },
        {
            id: 3,
            name: "Sales",
        },

    ];
    // .map() the results
    const choices = department.map(department => {
        return {
            name: department.name,
            value: department.id
        }
    })


// THEN promt the user for role information (inquirer)
const answers = await inquirer
    .prompt([
        {
            type: "list",
            name: "department_id",
            message: " Choose a department",
            choices: [
                { name: "Marketing", value: 1 },
                { name: "Finance", value: 2 },
                { name: "Human Resource", value: 3 },
                { name: "Sales", value: 4 },
            ]
        }
    ])
    .then((answers) => {
        console.log(answers);
    });
}
        // Take the user's answers and go INSERT them into the 'role' table

// add an employee - CREATE - "INSERT" [table_name]

//update an employee 
