var z = require("./demo")
var x = require("prompt-sync")();
exports.o = function detail() {
    function table() {
        console.log(" 1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\n4)Exit\n5)You want all technologies information \n----------------------");
        console.log("+++++++++++++++++++++++++++++++++++++++++++");
        q2 = x("Enter the option : ");
    }
    table();
    var s = "true";
    while (s != "false") {
        if (q2 == "1") {
            var q3 = "yes";
            while (q3 != "no") {
                function add() {
                    var key = x("Enter the key :")
                    var value = x("Enter the value :");
                    z.ht.add(key, value)
                    q3 = x("You want add more Technologies : ");
                }
                add();
                z.ht.printAll();
                table();
            }
        }
        if (q2 == "2") {
            // console.log("_________________________________");
            z.ht.printAll();
            //console.log("_________________________________");
            var q3 = "yes";
            while (q3 != "no") {
                function add() {
                    var key = x("Enter the key to EDIT the technologies :")
                    var value = x("Enter the value to EDIT the technologies :")
                    z.ht.add(key, value)
                    q3 = x("You want edit again ? : ");
                }
                add();
                z.ht.printAll();       
                table();
            }
        }
        if (q2 == "3") {
            z.ht.printAll();
            var q5 = x("Enter the key which technology you want to delete ");
            console.log(z.ht.search(q5) + " These technologu removed")
            z.ht.remove(q5); z.ht.printAll();
            table();
        }
        if (q2 == "5") {
            console.log("Frontend Technologies\n========================")
            console.log(z.ht.front)
            console.log("Backend Technologies\n========================")
            console.log(z.ht.back)
            table();
        }
        if (q2 == "4") {
            console.log("Thank you for using these application")
            s = "false";
        }
    }
} 