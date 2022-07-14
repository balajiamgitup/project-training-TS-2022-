var fdata=require("./file");
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
    var sql ="CREATE TABLE restorent(order_items VARCHAR(20) ,bill INT , table_number  VARCHAR(10) NoT NULL UNIQUE, order_number VARCHAR(10) NOT NULL UNIQUE ,order_status VARCHAR(10))";
    connection.query(sql,function(error){ 
        if(error) throw Error("Tabale creation failed  ");
        console.log("Table is created ");
    });
    var sql = `INSERT INTO restorent (order_items,bill, table_number ,order_number,order_status) VALUES ("${fdata.data.Ordereditems}","${fdata.data.Amount}","${fdata.data.Tablenumber}","${fdata.data.Ordernumber}","${fdata.data.OrderStatus}")`;

    connection.query(sql, function (error, result) {
        if(error)  throw new Error("Data insertion failed  ");
             console.log("Data inserted success ")
    
    });
    connection.query("SELECT * FROM restorent", function (error, result) {
        if (error) throw new Error("Data fetching from table failed  ");
        console.log(result);
      });
});
}
catch(e)
{
    console.log(e.message);
}
//throw Error("Values are failed to add in table  ");