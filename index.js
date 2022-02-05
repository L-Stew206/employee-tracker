const mysql2 = require('mysql2');
const connection = require('./db/connection');


connection.query('SELECT * FROM employee', (err, results) => {

    console.table(results)

});


function viewAllDepartments (){

}