const mysql2 = require('mysql2');

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

    connection.connect(function (err) {
        if (err) {
          throw err;
        } else {
            console.log("Sucessfully connected to mysql")
        } 
      });
      
      module.exports = connect