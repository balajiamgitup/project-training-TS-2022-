// var mysql = require('mysql');
var loadmysql=require("./mysql");
var con = loadmysql.mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});


con.connect(function(err) {
    if (err) {
    //   return console.error('error: ' + err.message);
    return console.log("Sorry connection failed")
    }
  
    console.log('Connected to the MySQL server.');
  });