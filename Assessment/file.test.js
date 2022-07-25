const file=require("fs");
const main = require('./restorenMain');
jest.mock('fs');
describe('Testing File system flow ', () => {

    it('Should create order_detals.txt file with writeTextFile call ', () => {

      main.filesave.save();

       /// fileSave.writeTextFile();

        expect(file.writeFileSync).toHaveBeenCalled();

    });
});