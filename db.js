var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
// con.connect(function(err) {
//   if (err) throw err;
//   //Create data base
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
// con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "CREATE TABLE employee_table (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), department VARCHAR(255),age INT(3),salary INT(20))";
//       con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//       });
//     });
//Insert data to table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO employee_table (name,department,age,salary) VALUES ?";
//   var values = [
//     ['John', "Technological service",22,20000],
//     ['Peter', "Microsoft",25,25000],
//     ['Amy', "EQUYFAX",39,44000],
//     ['Hannah', "BUSINESS",22,23000],
//   ];

//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   })
// });

  con.query("SELECT * FROM employee_table", function (err, result, fields) {
    // if (err) throw err;
    console.log(result);
  });