var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Champion@696",
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
//       var sql = "CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), department VARCHAR(255),age INT(3),salary INT(20))";
//       con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//       });
//     });
// //Insert data to table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO employee (name, id,department,age,salary) VALUES ?";
//   var values = [
//     ['John', '100',"Dvelopment",22,20000],
//     ['Peter', '101',"Assocciate software",25,25000],
//     ['Amy', '102',"Testing",39,44000],
//     ['Hannah', '103',"Softaware developer",22,23000],
//     // ['Michael', '104'],
//     // ['Sandy', '105']
//     // ['Betty', 'Green Grass 1'],
//     // ['Richard', 'Sky st 331'],
//     // ['Susan', 'One way 98'],
//     // ['Vicky', 'Yellow Garden 2'],
//     // ['Ben', 'Park Lane 38'],
//     // ['William', 'Central st 954'],
//     // ['Chuck', 'Main Road 989'],
//     // ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   })
// });
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM employee", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
  con.query("SELECT * FROM employee", function (err, result, fields) {
    // if (err) throw err;
    console.log(result);
  });