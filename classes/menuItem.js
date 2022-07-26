var menuData=require("./menuData.ja");
// console.log( menuData[0].id);
class MenuItem{
    constructor(id,name,price){
   this.id=id;
   this.name=name;
   this.price=price;
};
    setupdatePrice(oldPrice,newPrice){
        for(var i=0;i<this.price.length;i++){
            if(oldPrice==this.price[i]){
        //  console.log(oldPrice+" "+this.price[i])
        this.price.splice(i,1,newPrice);
        }
        return this.price;
    }
    };
    menuView(){
        for(var i=0;i<this.id.length;i++){
            console.log(this.id[i]+"  "+this.name[i]+"  "+this.price[i]);
        }
    }
}
//var menu=new MenuItem();
// menuData.forEach(element => {
//         menu.id.push(element.id);
//       menu.name.push(element.name);
//       menu.price.push( element.price);
//     });
    //menu.menuView();
module.exports={MenuItem};
// console.log("Id    MenuItem      price  ");
// this.menuItemId.forEach((value)=>{
//     for(var menu in this.menu){
//         for(var price in this.price){
//             if(menu==value && price==value){
//                 console.log(value+"     "+this.menu[menu]+"         "+this.price[price]);
//             }
//         }
//     }
// })
