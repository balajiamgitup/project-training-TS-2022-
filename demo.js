var w = require("./show");
var file = require("fs");
var front = {};
//exports.front;
var back = {};
var technlogy = {}
var empty = {};
if (w.q1 == "front") {
    technlogy = front;
}
else {
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
        else if (w.q1 == "back") {
            this.values = this.back;
        }
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            delete this.values[hash][key];
        }
    }
    printAll() {
        for (const hash in this.values) {
            for (const key in this.values[hash]) {
                console.log("{", key, ", ", this.values[hash][key], "}")
            }
        }
        console.log("_________________________________");
    }
}
var ht = new HashTable();
//front=ht.values;
// back=ht.values;
// exports.ht = ht;
// exports.q1 = ht.q1;
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
function disp(data) {
    for (const key in data) {
        console.log(key + "   :   " + data[key])
    }
}
var storing = function () {
    if (w.q1 == "front") {
        front = ht.values.NaN;
        var rawdata = file.readFileSync('fontend.txt');
        if (rawdata.length == 0) {
            var data = JSON.stringify(front, null, 2);
            file.appendFileSync('fontend.txt', data);
            console.log("Data stored in frontend.txt file ")
            ht.values = empty;
        }
        else {
            console.log("");
            file.truncateSync('fontend.txt', 0, function () {
                console.log('File Content Deleted')
            });
            let file_data = JSON.parse(rawdata);
            var add = { ...front, ...file_data };
            var data = JSON.stringify(add, null, 2);
            file.appendFileSync('fontend.txt', data);
            console.log("Data stored in frontend.txt file ")
            ht.values = empty;
        }
    }

    else if (w.q1 == "back") {
        back = ht.values.NaN;
        var rawdata1 = file.readFileSync('backend.txt');
        if (rawdata1.length == 0) {
            var data = JSON.stringify(back, null, 2);
            file.appendFileSync('backend.txt', data);
            console.log("Data stored in backend.txt file ")
            ht.values = empty;
        }
        else {
            console.log("");
            file.truncateSync('backend.txt', 0, function () {
                console.log('File Content Deleted')
            });
            let file_data = JSON.parse(rawdata1);
            var add = { ...back, ...file_data };
            var data = JSON.stringify(add, null, 2);
            file.appendFileSync('backend.txt', data);
            console.log("Data stored in backend.txt file ")
            ht.values = empty;
        }
    }
    else {
        console.log("Wrong option ")
    }
}
var filePrinting = function () {
    if (w.q1 == "front") {
        var rawdata = file.readFileSync('fontend.txt');
        let file_data = JSON.parse(rawdata);
        console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
        disp(file_data);
    }
    else if (w.q1 == "back") {
        var rawdata1 = file.readFileSync('backend.txt');
        let file_data1 = JSON.parse(rawdata1);
        console.log("<<<<<<<<<Backend Technologies>>>>>>>>>>> ");
        disp(file_data1);
    }
    else {
        console.log("Wrong option ");

    }
}
module.exports = { front, back, storing, ht, filePrinting, disp };