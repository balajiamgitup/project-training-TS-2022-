// var q1=prompt("Enter which techonolgy ypu want edit :");
// if(q1=="front"){
// var rawdata = file.readFileSync('fontend.txt');
// let file_data = JSON.parse(rawdata);
// console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
// main.disp(file_data);
// var front_save={};
// front_save=file_data;
// var qq1=prompt("Enter  the new key to  : ");
// var qq2=prompt("Enter the new value : ");
// front_save[qq1]=qq2;
// main.disp(front_save);
//  file.truncateSync('fontend.txt', 0, function() {
// });
// var data = JSON.stringify(front_save, null, 2);
// file.appendFileSync('fontend.txt', data);


var data={
"idli":50,
"dosa":1000
}
var arr=["idli","dosa"];
var bill=[];
var sum;
for (var key in data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
         bill.push(data[key])
      
    }
  
}
}
var s;
for(var i=0;i<bill.length;i++){
         s=bill[i--]+bill[i];
         sum+=s;
}
console.log(s)