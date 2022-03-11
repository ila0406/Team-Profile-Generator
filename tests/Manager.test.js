const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        // test manager.officeNumber (1/16)
        it("Should return an employee with their office number", () => {
            const manager = new Manager('Delilah', '1', 'ila0406@gmail.com','123');
    
            expect(manager.officeNumber).toBeDefined();
            });
    });

    describe("getOfficeNumber", () => {
        // test manager.getOfficeNumber (2/16)
        it('Gets office number of manager', () => {
            const manager = new Manager('Delilah', '1', 'ila0406@gmail.com','123');

            expect(manager.officeNumber).toBeDefined();
        });
    });

    describe("getRole", () => {
        // test manager.role (3/16)
        it('Gets role of manager', () => {
            const manager = new Manager('Delilah', '1', 'ila0406@gmail.com');

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});