var mysql=require("mysql");
 var connection=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"myNewDb"

})
try{
connection.connect(function(error){
    if(error) throw Error("Server failed ") ;
    var sql ="CREATE TABLE emp(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), department VARCHAR(255),age INT(3),salary INT(20))";
    connection.query(sql,function(error){
        if(error) throw Error("Tabale creation failed  ");
        console.log("Table is created ");
    });
    var sql = "INSERT INTO emp (name, id,department,age,salary) VALUES ?";
    var values = [
      ['John', '100',"Technological service",22,20000],
      ['Peter', '101',"Microsoft",25,25000],
      ['Amy', '102',"EQUYFAX",39,44000],
      ['Hannah', '103',"BUSINESS",22,23000],
    ];
    connection.query(sql, [values], function (error, result) {
      if (error)  throw Error("Values are failed to add in table  ");
      console.log("Number of records inserted: " + result.affectedRows);
    });
    connection.query("SELECT * FROM emp", function (error, result) {
        if (error) throw Error("Data fetching from table failed  ");
        console.log(result);
      });
});
}
catch(e)
{
    console.log(e.message);
}