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