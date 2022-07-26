var order=require("./order");
var ItemlIst=require("./menuData.ja")
class Customer extends order.Order {
    constructor(customername,contactNumber,customerId){
        super();
        this.order=[];
      this.customername=customername;
      this.contactNumber=contactNumber;
      this.customerId=customerId;
    };
    addOrder(id){
        ItemlIst.menuCatalige.forEach(element => {
            if(id==element.id){
                this.order.push({
                 id: element.id,
                 name:element.name,
                 price: element.price
                })
    
            }
        });
      //console.log(this.order);
    }
   modifyOrder(oldId,newId){
    for(var i=0;i<this.order.length;i++){
        if(oldId==this.order[i].id){
   this.order.splice(i,1);
   this.addOrder(newId);
    //this.order.slice(i,++i);
    }
   };
   return this.order;
   //console.log(this.order)
}
}
var customer=new Customer("Balaji",12345688,111);
// customer.modifyOrder(102);
//customer.canselOrder(102);
ItemlIst.menuCatalige.forEach(element => {
    customer.id.push(element.id);
    customer.name.push(element.name);
    customer.price.push( element.price);
});
//ItemlIst.menuView(customer.id,customer.name,customer.price);
//customer.modifyOrder(102);
customer.addOrder(101);
var x=customer.modifyOrder(101,102);
console.log(x)
module.exports=Customer;