var prompt = require("prompt-sync")();
var file = require("fs");
class Restorent {
    constructor() {
        this.order_number;
        this.table_number = ["1a", "1b", "1c"];
        // this.order_status;
        this.bill = [];
        this.order_item = {
            "Idlli": 50,
            "Biriyani": 150,
            "Chapathi": 40
        };
        this.ordered_list = [];
        this.final_list = {};
    }
    iItemList() {
        console.log("Available foods\n**********************");
        // this.order_item = {
        //     "Idlli": 50,
        //     "Biriyani": 150,
        //     "Chapathi": 40
        // }
        console.log(this.order_item);
        var condition;
        while (condition != "false") {
            var input1 = prompt("Enter the food :");
            this.ordered_list.push(input1);
            var input2 = prompt("You want add more foods(yes/no) : ");
            if (input2 == "yes") {
                condition = "true";
            }
            else {
                console.log(this.ordered_list)
                condition = "false";
            }
        }
    }
    billling() {
        for (var key in this.order_item) {
            for (var i = 0; i < this.ordered_list.length; i++) {
                if (this.ordered_list[i] == key) {
                    this.bill.push(this.order_item[key]);
                }
                else {
                    console.log("")
                }
            }
        }
        console.log(this.bill)
    }
    input(input1) {
        if (input1 == "1a") {
            this.order_number = "401";
            return "YOUR ORDER NUMBER " + this.order_number;
        }
        else if (input1 == "1b") {
            this.order_number = "402";
            return "YOUR ORDER NUMBER " + this.order_number;
        }
        else if (input1 == "1c") {
            this.order_number = "409";
            return "YOUR ORDER NUMBER " + this.order_number;
        }
    }
    diply() {
        console.log('Ordered items :' + this.ordered_list);
        console.log("TABLE NUMBER :" + this.table_number);
        console.log("Order number :" + this.order_number);
    }
    waiterAdd() {
        var input1 = prompt("Enter the food name to add :");
        var input2 = prompt("Enter the price :");
        this.order_item[input1] = input2;
        console.log(this.order_item)
    }

}

var obj = new Restorent();
module.exports = { obj }
