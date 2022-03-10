const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        it("Should return an employee with their office number", () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com','123');
    
            expect(employee.officeNumber).toBeDefined();
            });
    });

    // describe("getOfficeNumber", () => {

    // });

    describe("getRole", () => {
        it('Gets role of manager', () => {
            const manager = new Manager('Delilah', '1', 'ila0406@gmail.com');

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});