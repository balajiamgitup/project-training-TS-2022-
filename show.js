var x = require("prompt-sync")();
console.log("Welcome to our Technology List application \n We have Three category FRONT END , BACK END amd DATA BASE ");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
exports.q1 = x(" Which technologies u want(front/back/dataBase) : ");
console.log("----------------------------------------------------");
var a = require("./option");
a.o();
var qq = x("Do u want to add other technologies : ");
if (qq == "yes") {
    exports.q1 = x(" Which technologies u want(front/back/dataBase) : ");
    console.log("********************************************************");
    var a = require("./option");
    a.o();
}
else {
    console.log("END")
}

