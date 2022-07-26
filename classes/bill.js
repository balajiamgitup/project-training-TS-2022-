var order=require("./order");
class BIll extends order.Order{
    constructor(orderId,orderStatus,billId,customerId,paymentType){
          super(orderId,orderStatus);
          this.billId=billId;
          this.customerId=customerId;
          this.paymentType=paymentType;
    }
    pay(){
        if(this.orderStatus=="Booked"){
            console.log(this.price)
            var bill=0;
       order.obj.price.forEach(value=>{
             bill+=value;
            console.log(value);
            })
            return bill;
        }
    }
};
var bill=new BIll(401,"Booked",101,111,"online");
 order.obj.addMenu(101);
// order.obj.addMenu(102);
// var x=bill.pay();
// console.log(x);
