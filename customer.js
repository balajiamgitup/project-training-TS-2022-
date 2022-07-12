var mysql=require("mysql");
 var connection=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"ecom"

})
try{
connection.connect(function(error){
    if(error) throw Error("Server failed ") ;
    var sql ="CREATE TABLE customer(pid INT NOT NULL  PRIMARY KEY, name VARCHAR(255) NOT NULL ,age INT(3),mobileNo CHAR(13) NOT NULL,CONSTRAINT chk_mobile check(mobileNo regexp '^[0-9]{10}$'))";
    connection.query(sql,function(error){
        if(error) throw error;
        console.log("Table is created ");
    });
    var sql = "INSERT INTO customer (pid, name,age,mobileNo ) VALUES ?";
    var values = [
      [1, 'Balaji',22,12345678901],
      [2, 'Dinga',23,0987654321],
    //   ['Amy', '102',"EQUYFAX",39,44000],
    //   ['Hannah', '103',"BUSINESS",22,23000],
    ];
    connection.query(sql, [values], function (error, result) {
      if (error)  throw error;
      console.log("Number of records inserted: " + result.affectedRows);
    });
    connection.query("SELECT * FROM customer", function (error, result) {
        if (error) throw Error("Data fetching from table failed  ");
        console.log(result);
      });
});
}
catch(e)
{
    console.log(e.message);
}