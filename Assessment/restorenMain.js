var restorentmain = require("./retorentLevel1");
//restorentmain.main();
var prompt = require("prompt-sync")();
var file = require("fs");
var bill={
     billing:  (gst) => restorentmain.obj.billling(restorentmain.obj.bill,restorentmain.obj.order_item,restorentmain.obj.ordered_list)+gst,
};
//var condition;
function changeOrderStatus(option){
    restorentmain.obj.order_status = option;
    if (restorentmain.obj.order_status == "Cancel") {
        file.truncateSync("order_detals.txt");
    }
}
function addDelete(){
    var option=prompt("Enter the o[tion")
if (option == "1") {
    console.log(restorentmain.obj.order_item);
    var key = prompt("Enter the food name to update price :");
    var value = prompt("enter the new price :");
    var int=parseInt(value);
    restorentmain.obj.order_item[key] =int;
    return "added"
}
else if (option == "2") {
    console.log(restorentmain.obj.table_number);
    var table = prompt("Enter the table number ");
    restorentmain.obj.input(table);
    console.log(restorentmain.obj.table);
   filesave.save();
}
}
// var bill = {
//     billing: (bill, order, list) => restorentmain.obj.billling(restorentmain.obj.bill, restorentmain.obj.order_item, restorentmain.obj.ordered_list),
// };
const filesave = {
    save: function () {
        restorentmain.obj.final_list["Ordereditems"] = restorentmain.obj.ordered_list;
        restorentmain.obj.final_list["Amount"] = restorentmain.obj.bill;
        restorentmain.obj.final_list["Tablenumber"] = restorentmain.obj.table;
        restorentmain.obj.final_list["Ordernumber"] = restorentmain.obj.order_number;
        restorentmain.obj.final_list["OrderStatus"] = restorentmain.obj.order_status;
        var data = JSON.stringify(restorentmain.obj.final_list, null, 2)
        file.writeFileSync("order_detals.txt", data);
    }
};
//************************************************************ */
function userActivities(options) {
    if (options == "1") {
        var order = restorentmain.obj.iItemList();
        return order;
    }
    else if (options == "2") {
        console.log("Available tables ");
        console.log(restorentmain.obj.table_number);
        restorentmain.obj.table = prompt("Enter the table number ")
        restorentmain.obj.input(restorentmain.obj.table);
        return restorentmain.obj.input(restorentmain.obj.table);
    }
    else if (options == "3") {
        var input4 = prompt("Enter the order status : ");
        if (input4 == "Booked") {
            restorentmain.obj.order_status = input4;
            restorentmain.obj.billling(restorentmain.obj.bill,restorentmain.obj.order_item,restorentmain.obj.ordered_list);
            // restorentmain.obj.billling(restorentmain.obj.bill, restorentmain.obj.order_item, restorentmain.obj.ordered_list),
         restorentmain.obj.bill=bill.billing(5);
            restorentmain.obj.diply();
            // var input=prompt("1)Save : ");
            // if(input=="1"){
           filesave.save();
            return restorentmain.obj.diply();
        }
        else {
            console.log("Your order canceled ");
            return "Your order canceled";
        }
    }
    else {
        console.log("wroung option ");
        return "wroung option";
    }
    return restorentmain.obj.bill;
}
//************************************** */
function waiter(options2) {
    if (options2 == "1") {
        restorentmain.obj.diply();
    }
    else if (options2 == "2") {
        console.log(restorentmain.obj.order_item)
        restorentmain.obj.waiterAdd();
    }
    else if (options2 == "3") {
        console.log("  1)Update price  2)Update table :");
        var input4 = prompt("Enter the option :");
        addDelete(input4);
    }
    else {
        console.log("Wroung option  ");
    }

}
// module.exports=filesave;
// //restorentmain.obj.input("1a")
var main = () => {
    var condition = "true";
    while (condition != "false") {
        console.log(" 1)User \n  2)Waiter \n  3)Exist  \n  5)Kitchen \n  6)Saved data ")
        var input2 = prompt("enter the option :")
        if (input2 == "1") {
            console.log("1)Order 2)Table order 3)Booking ")
            var selection = prompt("Eneter the option :")
           var x= userActivities(selection);
        }
        //******************************************************* */
        else if (input2 == "2") {
            console.log(" 1)View  2)add  3)update ");
            var input3 = prompt("Enter the option :");
            waiter(input3);
        }
        else if (input2 == "3") {
            condition = "false";
        }
        else if (input2 == "5") {
            var input1 = prompt("Update the  the order status : ");
         changeOrderStatus(input1);
            }
        else if (input2 == "6") {
            var fdata = file.readFileSync("order_detals.txt");
            console.log(JSON.parse(fdata));
        }
        else {
            console.log("wroung input ")
        }
    }
}
try {
   // main();
}
catch (e) {
    console.log(e.message);
}

module.exports = {bill,filesave };
// var bill={
//      billing:  (bill,order,list) => restorentmain.obj.billling(restorentmain.obj.bill,restorentmain.obj.order_item,restorentmain.obj.ordered_list),
// };
//https://stackoverflow.com/questions/71531192/jest-mock-module-functions-used-in-another-module