var file=require("fs");
var emp=[
    {"id":101,
    "name":"balaji",
     "Age":22,
    "Salary":20000},
    {"id":102,
    "name":"dinga",
    "Age":25,
    "Salary":50000
    },{"id":103,
        "name":"dingi",
        "Age":23,
        "Salary":25000
    },
    {"id":104,
        "name":"bhuvan",
        "Age":29,
        "Salary":60000
    },{"id":105,
        "name":"Rangi",
        "Age":22,
        "Salary":2000
    },{"id":106,
        "name":"Ranga",
        "Age":25,
        "Salary":40000
    }]
    let data = JSON.stringify(emp, null, 2);
    file.writeFileSync('employee_File.txt', data);
