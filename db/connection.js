const mysql = require('mysql2');
const util = require('util');

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'employees_db'
  });

connection.query = util.promisify(connection.query);

// connection.connect(function (err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Sucessfully connected to mysql")
//   }
// });

module.exports = connection; 
