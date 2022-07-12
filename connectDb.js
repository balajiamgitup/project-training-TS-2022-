// var mysql = require('mysql');
var loadmysql=require("mysql");
var connection = loadmysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

try{
connection.connect(function(error){
  if(error) throw new Error("connection failed ");
  console.log("Server connected ");
  var sql="CREATE DATABASE mydb";
  connection.query(sql,function(error,result){
      if(error) throw new Error("Db failed ");;
      console.log("Db Success");
  })
});
}
catch(e){
  console.log(e.message);
}