var file=require("fs");
var main=require("./demo");
var prompt=require("prompt-sync")();
function edit(){
    var q1=prompt("Enter which techonolgy ypu want edit :");
    if(q1=="front"){
    var rawdata = file.readFileSync('fontend.txt');
    let file_data = JSON.parse(rawdata);
    console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
    main.disp(file_data);
    var front_save={};
    front_save=file_data;
    var qq1=prompt("Enter  the new key to  : ");
    var qq2=prompt("Enter the new value : ");
   front_save[qq1]=qq2;
   main.disp(front_save);
     file.truncateSync('fontend.txt', 0, function() {
});
var data = JSON.stringify(front_save, null, 2);
file.appendFileSync('fontend.txt', data);
    }
else if (q1=="back"){
    var rawdata = file.readFileSync('backend.txt');
    let file_data = JSON.parse(rawdata);
    console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
    main.disp(file_data);
    var front_save={};
    front_save=file_data;
    var qq1=prompt("Enter  the new key to  : ");
    var qq2=prompt("Enter the new value : ");
   front_save[qq1]=qq2;
   main.disp(front_save);
     file.truncateSync('backend.txt', 0, function() {
});
var data = JSON.stringify(front_save, null, 2);
file.appendFileSync('backend.txt', data);
}
else 
console.log("You entered wrong technollogy pls check :")

}
//module.exports={sort};
module.exports={ edit};
//edit();
