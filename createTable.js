var loadmysql=require("mysql");
var con =loadmysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
  con.connect(function(err) {
    if (err) {
        return console.log("Sorry connection failed")
        }
      var sql = "CREATE TABLE employeeData (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT(3),salary INT(20))";
      con.query(sql, function (err, result) {
        if (err) throw err
        console.log("Table created");
      });
    });
