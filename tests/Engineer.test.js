const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("gitHub", () => {
        // test engineer.id (7/16)
        it("Should return an employee with an id", () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail', 'ila0406');
           
            expect(engineer.github).toBeDefined();
            });
    });

    describe("getGitHub", () => {
        // test engineer.github (8/16)
        it('Gets the github username from for the engineer ', () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail', 'ila0406');
    
            expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
        });
    });

    describe("getRole", () => {
        // test engineer.role (9/16)
        it('Gets the role of Engineer', () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail.com');

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});