const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school", () => {
        it("Should return an employee with their school", () => {
            const employee = new Employee('Delilah', '1', 'RPI');
    
            expect(employee.school).toBeDefined();
            });
    });

    // describe("getGitHub", () => {

    // });

    // describe("getRole", () => {

    // }); 
});