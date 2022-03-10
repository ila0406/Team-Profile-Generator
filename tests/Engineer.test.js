const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("gitHub", () => {
        it("Should return an employee with an id", () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail');
    
            expect(employee.gitHub).toBeDefined();
            });
    });

    // describe("getGitHub", () => {

    // });

    describe("getRole", () => {
        it('Gets role of Engineer', () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail.com');

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});