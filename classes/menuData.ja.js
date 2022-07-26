menuCatalige =[{
    id:101,name:'Biriyani',price:150
},{
    id:102,name:'Porata',price:80,
},{
    id:103,name:'Dosa',price:50,
}];
 function   menuView(id,name,price){
        for(var i=0;i<id.length;i++){
            console.log(id[i]+"  "+name[i]+"  "+price[i]);
        }
    }
module.exports={menuCatalige,menuView};