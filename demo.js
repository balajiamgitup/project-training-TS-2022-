var w = require("./show");
var file=require("fs");
var front = {};
var back ={};
var technlogy={}
if (w.q1 == "front") {
    technlogy = front;
}
else   {
    technlogy = back;
}
class HashTable {
    constructor() {
        // this.y=x;
        // this.front = {};
        this.values = technlogy;//object to store values 
        //this.back = {};
      //  this.dataBase = {};
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
    // //      if (this.q1 == "front") {
    // //         this.values = this.front;
    // //     }
    // //   else   if (this.q1 == "back") {
    // //         this.values = this.back;
    // //     }

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
//     if (this.q1 == "front") {
//         this.values = this.front;
//     }
//   else   if (this.q1 == "back") {
//         this.values = this.back;
//     }
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
//         if (w.q1 == "front") {
//             this.values = this.front;
//         }
//        else  if (w.q1 == "back") {
//             this.values = this.back;
//         }
// //     if (this.q1 == "front") {
// //         this.values = this.front;
// //     }
// //   else   if (this.q1 == "back") {
// //         this.values = this.back;
// //     }
// //          console.log("_________________________________");
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
exports.storing=function(){
        if (w.q1 == "front") {
           // this.values = this.front;
           var d=JSON.stringify(ht.values,null,2);
           file.writeFile("front.txt",d,function(error){
               console.log("Data saved in front.txt file ");
         }) 
 }
  else if (w.q1 == "back") {
    // this.values = this.front;
    var d=JSON.stringify(ht.values.null,2);
    file.writeFile("back.txt",d,function(error){
        console.log("Data saved in back.txt file ");
  }) 
}
}
exports.filePrinting=function(){
    console.log(file);
    if (w.q1 == "front") {
        // this.values = this.front;
   file.readFile("front.txt","utf8",function(error,data){
  console.log("Fronted" + data)
  })
}
else if(w.q1=="back"){
    file.readFile("back.txt","utf8",function(error,data){
        console.log("Backend" + data)
        })
}
}

// var w=JSON.stringify(front,null,2)
// var w1=JSON.stringify(back,null,2)
// x.writeFile("raf.txt",w,function(error){
//     //console.log("data saved in file ")
//  })  
//  x.writeFile("raf.txt1",w1,function(error){
//   //console.log("data saved in file ")
// })
//  x.readFile("raf.txt","utf8",function(error,data){
//   console.log("Fronted" + data)
//   })
//   x.readFile("raf.txt1","utf8",function(error,data){
//     console.log("Backend"+ data)
//     });