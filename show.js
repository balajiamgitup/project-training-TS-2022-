var x = require("prompt-sync")();
var a = require("./option");
console.log("Welcome to our Technology List application \n We have Three category FRONT END AND BACK E ");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
exports.q1 = x(" Which technologies u want(front/back) : ");
console.log("----------------------------------------------------");
//var a = require("./option");
a.det();
var qq = x("Do u want to add other technologies : ");
if (qq == "yes") {
    exports.q1 = x(" Which technologies u want(front/back/dataBase) : ");
    console.log("********************************************************");
    var a = require("./option");
    a.det();
}
else {
    console.log("END")
}