const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        it("Should return an employee with their office number", () => {
            const employee = new Employee('Delilah', '1', '123');
    
            expect(employee.officeNumber).toBeDefined();
            });
    });

    // describe("getOfficeNumber", () => {

    // });

    // describe("getRole", () => {

    // }); 
});