var mysql=require("mysql");
 var connection=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: ""

})
connection.connect(function(error){
    if(error) throw error;
    console.log("Server connected ");
   // var result;
    var sql="CREATE DATABASE ecom";
    connection.query(sql,function(error,result){
        if(error) throw error
        console.log("Db Success");
    })
});