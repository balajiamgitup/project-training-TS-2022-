const prompt = require('prompt-sync')();
 const main = require('./restorenMain');
jest.mock("./retorentLevel1.js",()=>{
    return {
        obj: {
            billling: () => 120
        }
    };
});
describe('Mocking billing  ', () => {

    it('Checking bill function  ', () => {

        expect(main.bill.billing(5)).toBe(125);
   })

});
