var loadmysql=require("./mysql");
var con = loadmysql.mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });

  con.connect(function(err) {
    if (err) {
        return console.log("Sorry connection failed")
        }
    con.query("SELECT * FROM employeeData", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
//     var sql = "DROP TABLE  employee_table";
//     con.query(sql, function (err, result) {
//         if (err) {
//             //   return console.error('error: ' + err.message);
//             return console.log("Sorry connection failed")
//             }
          
//       console.log("Table deleted");
//     });
//   });
