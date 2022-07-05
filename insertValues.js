var file=require("fs");
var loadmysql=require("./mysql")
var con = loadmysql.mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
  });
let rawdata = file.readFileSync('employee_File.txt');
let empdata = JSON.parse(rawdata);
console.log(empdata);

  con.connect(function(err) {
    if (err) {
        //   return console.error('error: ' + err.message);
        return console.log("Sorry connection failed")
        }
      
  console.log("Connected!");
  var sql = "INSERT INTO employeeData (name, id,age,salary) VALUES ?";
  var values = [
    [empdata[0].empdata[0].Age,empdata[0].Salary],
    [empdata[1].id,empdata[1].Age,empdata[1].Salary],
    [empdata[2].id,empdata[2].Age,empdata[2].Salary],
    //['Hannah', '103',"BUSINESS",22,23000],
  ];

  con.query(sql, [values], function (err, result) {
    if (err)  throw err
    console.log("Number of records inserted: " + result.affectedRows);
  })
});

// for(var i=0;i<empdata.length;i++){
//     var values1 = [empdata[i].name,empdata[i].id,empdata[i].Age,empdata[i].Salary];
//     var values=values1;
  
//   }
// [empdata[0].name,empdata[0].id,empdata[0].Age,empdata[0].Salary],
// [empdata[1].name,empdata[1].id,empdata[1].Age,empdata[1].Salary],
// [empdata[2].name,empdata[2].id,empdata[2].Age,empdata[2].Salary],
// //['Hannah', '103',"BUSINESS",22,23000],
// ];