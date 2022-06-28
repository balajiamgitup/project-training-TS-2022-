# project-training-TS-2022-
// AZURA //(https://dev.azure.com/USTAccounts/_git/USTI-SSTS-CB-DL_TS_Training?path=/Freshers/BalajiAM/Day1&version=GBmaster)
//
//[Yesterday 11:00] Balaji A M(UST,IN)
https://stackabuse.com/reading-and-writing-json-files-with-node-js/
Reading and Writing JSON Files with Node.js
One of the best ways to exchange information between applications written in different languages is to use the JSON (JavaScript Object Notation) format. Thanks...
//Day8&9
//var w = require("./show");
class HashTable {
    constructor() {
        this.front = {};
        this.values = {};//object to store values 
        this.back = {};
        this.dataBase = {};
        this.length = 0;//length of an value
        this.q1;
        this.size = 0;//size of hash table
    }
    calculateHash(key) {
        return key.toString().length % this.size;
    }
    search(key) {
    //     if (w.q1 == "front") {
    //         this.values = this.front;
    //     }
    //   else   if (w.q1 == "back") {
    //         this.values = this.back;
    //     }
         if (this.q1 == "front") {
            this.values = this.front;
        }
      else   if (this.q1 == "back") {
            this.values = this.back;
        }

        const hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }
    //*************************************************** */
    add(key, value) {
        const hash = this.calculateHash(key);
    //     if (w.q1 == "front") {
    //         this.values = this.front;
    //     }
    //   else   if (w.q1 == "back") {
    //         this.values = this.back;
    //     }
    if (this.q1 == "front") {
        this.values = this.front;
    }
  else   if (this.q1 == "back") {
        this.values = this.back;
    }
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;
    }
    remove(key) {
        if (w.q1 == "front") {
            this.values = this.front;
        }
      else   if (w.q1 == "back") {
            this.values = this.back;
        }
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            delete this.values[hash][key];
        }
    } 
    printAll() {
    //     if (w.q1 == "front") {
    //         this.values = this.front;
    //     }
    //    else  if (w.q1 == "back") {
    //         this.values = this.back;
    //     }
    if (this.q1 == "front") {
        this.values = this.front;
    }
  else   if (this.q1 == "back") {
        this.values = this.back;
    }
         console.log("_________________________________");
        for (const hash in this.values) {
            for (const key in this.values[hash]) {
                console.log("{", key, ", ", this.values[hash][key], "}")
            }
        }
        console.log("_________________________________");
    }
}
var ht = new HashTable();
exports.ht = ht;
exports.q1 = ht.q1;
// ht.q1 = "front"
// ht.add("1", "HTML");
// ht.add("2", "Type Script");
// ht.q1 = "back";
// ht.add("1", "Ruby");
// ht.add("2", "PHP");
// ht.q1= "dataBase";
// ht.add("1", "SQL Lite");
// console.log(ht.front);
// console.log(ht.back)
//////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////
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
//teset
//////////////////////////////////////////////////
var x=require("./demo");
//Frontend
//var z=require("./show");
//if(x.ht.q1=="front"){
    // var result=x.ht.search("1");
    // console.log(result);
//     x.ht.q1 = "front";
// x.ht.add("1", "HTML");
// x.ht.add("2", "Type Script");
// test("Searching Front Technologies",()=>{
//     var result=x.ht.search("1");
//     expect(result).toBe("HTML");
// });
// test("Searching Front Technologies",()=>{
//     var result=x.ht.search("2");
//     expect(result).toBe("Type Script");
// });
//Backend
x.ht.q1 = "back";
x.ht.add("1", "Ruby");
x.ht.add("2", "PHP");
test("Searching Front Technologies",()=>{
    x.ht.search=jest.fn((e)=>"Ruby");
    expect(x.ht.search("1")).toBe("Ruby");
});
test("Searching Front Technologies",()=>{
    x.ht.search=jest.fn((e)=>"PHP");
    expect(x.ht.search("2")).toBe("PHP");
});
///////////////////////////////////////test2
var x=require("./demo");
//Frontend
//var z=require("./show");
//if(x.ht.q1=="front"){
    // var result=x.ht.search("1");
    // console.log(result);
//     x.ht.q1 = "front";
// x.ht.add("1", "HTML");
// x.ht.add("2", "Type Script");
// test("Searching Front Technologies",()=>{
//     var result=x.ht.search("1");
//     expect(result).toBe("HTML");
// });
// test("Searching Front Technologies",()=>{
//     var result=x.ht.search("2");
//     expect(result).toBe("Type Script");
// });
//Backend
x.ht.q1 = "back";
x.ht.add("1", "Ruby");
x.ht.add("2", "PHP");
test("Searching Front Technologies",()=>{
    var result=x.ht.search("1");
    expect(result).toBe("Ruby");
});
test("Searching Front Technologies",()=>{
    var result=x.ht.search("2");
    expect(result).toBe("PHP");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//ECOM
var x=require("prompt-sync")();
var qq1;
var redmi;
var oneplus;
var sumsung;
var ord=[];
class Ecom{
    constructor(){
        this.customer;
        this.order;
        this.product;
        this.promotion;
    }
    customer=function(){
      var q1=x("Enter name :");
      var q2=x("Enter mobile number :");
      var q3=x("Enter the password :");
      console.log("Account is created");
      var a="true";
      while(a!="false"){
      var q4=x("Enter name :");
      var q5=x("Enter password :");
      if(q1===q4 && q3===q5){
          console.log("LOgin is success");
         a="false";
      }
      else{
          console.log("login failed pls try agin ")
      }
    }
}
product=function(){
    console.log("Mobiles Brands Available \n 1) Redmi \n2)Sumsung \n3)OnePlus");
     redmi=["Redmi Note 11T 5G","10000","Redmi Note 11 pro+5G","20000"];
   oneplus=["OnePlus Nord CE 2 5G ","15000","OnePlus 10 Pro 5g","18000"];
   sumsung=["Samsung Galaxy M12","16000","Sumsung Galaxy M32","21000"];
}
promotion=function(){
   if(qq1=="redmi"){
    console.log("You have 20% offer on "+redmi[0] +" Offer will be close in 2 days");
   }
}
order=function(){
    var s="true";
    var z=0;
  while(s!="false"){
     qq1=x("Enter the brand : ");
     z++;
     if(qq1=="redmi"){
        var f=1;
        for(var  i=0;i<redmi.length;i++){
            console.log(f++ +")"+redmi[i] +"        "+redmi[++i]);
        }
        this.promotion();
      var q1=x("Enter which phone you want :");
      if(q1=="1"){
        ord[++z]=redmi[0],redmi[1];
      }
      else {
        ord[++z]=redmi[2],redmi[3];
      }
      console.log("Your oreder = "+ord)
    }
    else if(qq1=="oneplus"){
        var f=1;
        for(var  i=0;i<oneplus.length;i++){
            console.log(f++ +")"+oneplus[i] +"        "+oneplus[++i]);
        }
    }
    else if(qq1=="sumsung"){
        var f=1;
        for(var  i=0;i<sumsung.length;i++){
            console.log(f++ +")"+sumsung[i] +"        "+sumsung[++i]);
        }
    }
    var q6=x("You want to cancel order : ");
if(q6=="yes"){
    ord=null;
    console.log("Your order canceled ")
}
else{
var q7=x("You want to order again : ")
 if(q7=="yes"){
     s="true";
 }
 else{
     s="false";
 }
}
  }
}
search(){
    console.log
}
}

var e=new Ecom();
//e.customer();

e.product();
e.order();


