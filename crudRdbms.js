var mysql=require("mysql");
var prompt=require("prompt-sync")();
 var connection=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"myNewDb"

})
// connection.connect(function(error){
//     if(error) throw Error("Server failed ") ;
//     connection.query("SELECT * FROM restorent", function (error, result) {
//         if (error) throw new Error("Data fetching from table failed  ");
//         console.log(result);
//       });

// });
 function view (){
connection.query("SELECT * FROM restorent", function (error, result) {
    if (error) throw new Error("Data fetching from table failed  ");
    console.log(result);
  });
}
function add(item,bill,table_number,order_number,order_status){
    var sql = `INSERT INTO restorent (order_items,bill, table_number ,order_number,order_status) VALUES ("${item}","${bill}","${table_number}","${order_number}","${order_status}")`;
    connection.query(sql, function (error) {
        if(error)  throw new Error("Data insertion failed  ");
             console.log("Data inserted success ")
    
    });
}
console.log("1)View\n2)Add\n3)Delete\n4)Update");
var input11=prompt("Enter the option : ")
if(input11=="1"){
    console.log("Saved order ");
    view();
}
else if(input11=="2"){
    var input1=prompt("Enter the Items you want to add :");
    var input2=prompt("Enter the total bill :");
    var input3=prompt("Enter the table number :");
    var input4=prompt("Enter the order number : ");
    var input5=prompt("Enter the order status : ");
    add(input1,input2,input3,input4,input5);

}
else if(input11=="3"){
    
}
