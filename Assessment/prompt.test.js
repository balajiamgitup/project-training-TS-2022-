const restorent=require("./retorentLevel1");
jest.mock('prompt-sync', () => () => () => "Idlli");
describe("User activities ",()=>
{
 test("Taking order",()=>{
     expect(restorent.obj.iItemList()).toStrictEqual(["Idlli"]);
 })

});