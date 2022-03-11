const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school", () => {
        it("Should return an employee with their school", () => {
            const intern = new Intern('Delilah', '1', 'ila0406@gmail.com', 'RPI');
            
            expect(intern.school).toBeDefined();
            });
    });

    describe("getSchool", () => {
        it('Gets the school from the Intern', () => {
            const intern = new Intern('Delilah', '1', 'ila0406@gmail.com', 'RPI');
            
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

    describe("getRole", () => {
        it('Gets role of Intern', () => {
            const intern = new Intern('Delilah', '1', 'ila0406@gmail.com');

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});