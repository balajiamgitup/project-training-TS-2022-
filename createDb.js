var loadmysql=require("./mysql");
var con = loadmysql.mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
    //database: "mydb"
  });
con.connect(function(err) {
    //Create data base
    if (err) {
        //   return console.error('error: ' + err.message);
        return console.log("Sorry connection failed")
        }
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
      console.log("Database created");
    });
  });