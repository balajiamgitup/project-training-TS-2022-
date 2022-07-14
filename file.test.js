var file=require("fs");
var filedata=file.readFileSync("order_detals.txt");
var data=JSON.parse(filedata);
console.log(data)
// module.exports={data};
test ("file testing ",()=>{
    expect(data).toStrictEqual({
        Ordereditems: [ 'Idlli' ],
        Amount: [ 50 ],
        Tablenumber: '1a',
        Ordernumber: '401'
      });
})