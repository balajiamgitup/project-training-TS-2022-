# project-training-TS-2022-
// AZURA //(https://dev.azure.com/USTAccounts/_git/USTI-SSTS-CB-DL_TS_Training?path=/Freshers/BalajiAM/Day1&version=GBmaster)
//
//[Yesterday 11:00] Balaji A M(UST,IN)
https://stackabuse.com/reading-and-writing-json-files-with-node-js/
Reading and Writing JSON Files with Node.js
One of the best ways to exchange information between applications written in different languages is to use the JSON (JavaScript Object Notation) format. Thanks...
//Day8&9
var x=require("prompt-sync")();
var q1=require("./options");
class HashTable {

    constructor() {
        this.front={};
      this.values = {};//object to store values 
      this.back={};
      this.dataBase={};
      this.length = 0;//length of an value
  
      this.size = 0;//size of hash table
    }
    calculateHash(key) {
      return key.toString().length % this.size;
    }
    search(key)
    {
        if(q1.q1=="front"){
            this.values=this.front;
        }
        else{
            this.values=this.back;
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
    add(key, value) 
    {
      const hash = this.calculateHash(key);
      if(q1.q1=="front"){
        this.values=this.front;
    }
    else{
        this.values=this.back;
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
        if(q1.q1=="front"){
            this.values=this.front;
        }
        else{
            this.values=this.back;
        }
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash)&&
        this.values[hash].hasOwnProperty(key)){
            delete this.values[hash][key];
        }
      }
      printAll(){
          for( const hash in this.values){
             for(const key in this.values[hash]){
                 console.log("{",key,", ",this.values[hash][key], "}")
             }
             }
      
      }
     
  }
  exports.ht = new HashTable();
//   var s=ht;
// m=s;
// console.log("Welcome to our Technology List application \n We have Three category FRONT END , BACK END amd DATA BASE ");
// var q1=x("            Which technologies u want(front/back)\n----------------------------------------------------");
// console.log(" 1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\4)Exit\n5)You want all technologies information \n6)Technology change------------------");
// var q2=x("Enter the option  : ");
//  const ht = new HashTable();
//  //********************************************** */
// if(q2=="1"){
//     var q3;
//     while(q3!="no"){
//    function add(){
//     var key=x("Enter the key :")
//     var value=x("Enter the value :");
//     ht.add(key,value)
//      q3=x("You want add more Technologies : ");
//     }
//     add();
//        }
//        ht.printAll();
//        console.log("2)Edit Technologies \n3)Delete Tecnologies\n4)Exit\n5)")
//        q2=x("Enter the option  : ");
// }
// //******************************************* */
//  if(q2=="2"){
//     ht.printAll()
// var q3="yes";
// while(q3!="no"){
// function add(){
// var key =x("Enter the key  to EDIT the technologies :")
// var value=x("Enter the key  to EDIT the technologies :")
// ht.add(key,value)
//  q3=x("You want edit again ?  : ");
// }
// add();
// ht.printAll()
//    }
//    console.log("1) Add Technologies \n3)Delete Tecnologies \n4)Exit ");
//    q2=x("Enter the option : ");
// }
// //******************************* */
// if(q2=="3"){
//     ht.printAll();
//     var q5=x("Enter the key which technology you want to delete ");
//     console.log(ht.search(q5)+" These technologu removed")
//     ht.remove(q5);
//     ht.printAll();
// }
// if(q2=="4"){
//     console.log("Thank you for using these application")
// }
// if(q2=="5"){
//   console.log("Frontend Technologies\n========================")
//   console.log(ht.front)
//   console.log("Backend Technologies\n========================")
//   console.log(ht.back)
// }
// if(q2=="6"){
//   var q6=x("Enter the technology");
//   ht.values=ht.q6;
//   console.log("1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\4)Exit\n5)You want all technologies information")
// }
// ht.printAll()
// console.log(ht.back)
//*****************************************************************************
var z=require("./has_src")
var x=require("prompt-sync")();
console.log("Welcome to our Technology List application \n We have Three category FRONT END , BACK END amd DATA BASE ");
var q1=x(" Which technologies u want(front/back/dataBase)  : ");
exports.t=q1;
console.log("----------------------------------------------------");
var q2;
function ask(){
 q2=x("Enter the option  : ");
}
console.log(" 1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\n4)Exit\n5)You want all technologies information \n6)Technology change \n----------------------");
ask();
//var q2=x("Enter the option  : ");
 //const ht = new HashTable();
//  if(q2=="6"){
//     z.ht.values=x("Enter the technology :");
// //   z.ht.values=z.ht.q6;
//   console.log("1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\4)Exit\n5)You want all technologies information");
//    ask();
// }
 if(q2=="1"){
    var q3;
    while(q3!="no"){
   function add(){
    var key=x("Enter the key :")
    var value=x("Enter the value :");
    z.ht.add(key,value)
     q3=x("You want add more Technologies : ");
    }
    add();
       }
       z.ht.printAll();
       console.log("2)Edit Technologies \n3)Delete Tecnologies\n4)Exit\n5)You want all technologies information \n6)Technology change")
      ask();
}
else  if(q2=="2"){
    z.ht.printAll()
var q3="yes";
while(q3!="no"){
function add(){
var key =x("Enter the key  to EDIT the technologies :")
var value=x("Enter the key  to EDIT the technologies :")
z.ht.add(key,value)
 q3=x("You want edit again ?  : ");
}
add();
z.ht.printAll()
   }
   console.log(" 1) Add Technologies \n3)Delete Tecnologies\n4)Exit\n5)You want all technologies information \n6)Technology change \n----------------------");
   var q2=x("Enter the option  : ");
 ask();
}
//******************************* */
else if(q2=="3"){
    z.ht.printAll();
    var q5=x("Enter the key which technology you want to delete ");
    console.log(ht.search(q5)+" These technologu removed")
    z.ht.remove(q5);
    z.ht.printAll();
    console.log(" 1) Add Technologies \n2)Edit Technologies \n4)Exit\n5)You want all technologies information \n6)Technology change \n----------------------");
  ask();
}
else if(q2=="4"){
    console.log("Thank you for using these application")
}
else if(q2=="5"){
  console.log("Frontend Technologies\n========================")
  console.log(z.ht.front)
  console.log("Backend Technologies\n========================")
  console.log(z.ht.back)
  console.log(" 1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\n4)Exit\n6)Technology change \n----------------------");
ask();
}
else if(q2=="6"){
    var q7=x("Enter the technology :");
      q1=q7;
//   z.ht.values=z.ht.q6;
  console.log("1) Add Technologies \n2)Edit Technologies \n3)Delete Tecnologies\4)Exit\n5)You want all technologies information\n----------------------");
  ask();
}
