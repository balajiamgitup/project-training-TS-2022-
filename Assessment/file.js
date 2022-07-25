var file=require("fs");
var filedata=file.readFileSync("order_detals.txt");
var data=JSON.parse(filedata);
console.log(data)
 module.exports={data};
