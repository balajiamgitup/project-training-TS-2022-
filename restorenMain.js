var restorentmain=require("./retorentLevel1");
//restorentmain.main();
var prompt=require("prompt-sync")();
var file=require("fs");
var condition;
var  input_table;
var order_status;
restorentmain.obj.input("1a")
function main(){
    var condition="true";
while(condition!="false"){
console.log("1)User \n2)Waiter \n3)Exist \n4)Svae \n5)Kitchen  ")
var input2=prompt("enter the option :")
if(input2=="1"){
    restorentmain.obj.iItemList();
    restorentmain.obj.billling();
console.log("Available tables ")
console.log(restorentmain.obj.table_number);
input_table = prompt("Enter the table number ")
restorentmain.obj.input(input_table);
var input4=prompt("Enter the order status : ");
}
//******************************************************* */
else if(input2=="2"){
   console.log("1)View 2)add 3)update ");
   var input3=prompt("Enter the option :");
   if(input3=="1"){
    restorentmain.obj.diply();
   }
//    *********************  addd
   else if(input3=="2"){
       console.log(restorentmain.obj.order_item)
       restorentmain.obj.waiterAdd();
   }
   //*************update  */
   else if(input3=="3"){
       console.log("1)Update price \2)Update table :");
       var input4=prompt("Enter the option :");
       if(input4=="1"){
           console.log(obj.order_item);
           var key=prompt("Enter the food name to update price :");
           var value=prompt("enter the new price ;");
           restorentmain.obj.order_item[key]=value;
       }
   }
   else{
       console.log("Wroung option  ")
   }

}
else if (input2=="3"){
    condition="false";
}
else if (input2=="5"){
    var input1=prompt("Update the  the order status : ")
    order_status=input1;
}
else if (input2=="4"){
    restorentmain.obj.final_list["Ordereditems"]=restorentmain.obj.ordered_list;
    restorentmain.obj.final_list["Amount"]=restorentmain.obj.bill;
    restorentmain.obj.final_list["Tablenumber"]=input_table;
    restorentmain.obj.final_list["Ordernumber"]=restorentmain.obj.order_number;
    restorentmain.obj.final_list["OrderStatus"]=order_status;
 var data=JSON.stringify(restorentmain.obj.final_list,null,2)
file.writeFileSync("order_detals.txt",data);
}
else {
    console.log("wroung input ")
}
}
}
main();

