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
