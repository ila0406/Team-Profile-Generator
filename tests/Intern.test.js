const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school", () => {
        // test intern.school (4/16)
        it("Should return an employee with their school", () => {
            const intern = new Intern('Delilah', '1', 'ila0406@gmail.com', 'RPI');
            
            expect(intern.school).toBeDefined();
            });
    });

    describe("getSchool", () => {
        // test intern.getSchool (5/16)
        it('Gets the school from the Intern', () => {
            const intern = new Intern('Delilah', '1', 'ila0406@gmail.com', 'RPI');
            
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

    describe("getRole", () => {
        // test intern.role (6/16)
        it('Gets role of Intern', () => {
            const intern = new Intern('Delilah', '1', 'ila0406@gmail.com');

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});