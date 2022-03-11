const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("gitHub", () => {
        it("Should return an employee with an id", () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail');
    
            expect(engineer.gitHub).toBeDefined();
            });
    });

    describe("getGitHub", () => {
        it('Gets the github username from for the engineer ', () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail', 'ila0406');
    
            expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
        });
    });

    describe("getRole", () => {
        it('Gets the role of Engineer', () => {
            const engineer = new Engineer('Delilah', '1', 'ila0406@gmail.com');

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});