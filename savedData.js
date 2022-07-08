var file=require("fs");
var prompt=require("prompt-sync")();
function sort(){
    var input1=prompt("Enter the technology");
    if(input1=="front"){
            var rawdata = file.readFileSync('fontend.txt');
            let file_data = JSON.parse(rawdata);
           console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
            for(const key in file_data.NaN){
                console.log(  key +"   :   "+file_data.NaN[key]  )
            }
              }
              else if(input1=="back"){
            var rawdata1= file.readFileSync('backend.txt');
            let file_data1 = JSON.parse(rawdata1);
            console.log("<<<<<<<<<Backend Technologies>>>>>>>>>>> ");
            for(const key in file_data1.NaN){
                console.log(   key +"  :   "+file_data1.NaN[key]   )
      
}
}
}
function edit(){
    var rawdata = file.readFileSync('fontend.txt');
    let file_data = JSON.parse(rawdata);
   console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
    for(const key in file_data.NaN){
        console.log(  key +"   :   "+file_data.NaN[key]  )
    }
    var 
}
module.exports={sort};
// var arr=[];
// var key =parseInt( Object.keys(file_data.NaN));

// Object.keys(file_data.NaN).forEach(key => {  
//   var k=key;
//   arr.push(parseInt(k));
// })
// //console.log(arr);
// var sorted = arr.sort
// ((a,b)=>a-b);
// console.log("Sorted order "+sorted);