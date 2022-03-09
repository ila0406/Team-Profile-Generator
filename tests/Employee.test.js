const Employee = require("../lib/Employee");

describe("Employee", () => {
    // describe("revrse", () => {
    //     it("", () => {
    //     const str = "";

    //     const result = new Algo().reverse(str);

    //     expect(result).toEqual(reversed);
    //     });
    // });

    describe("name", () => {
        it("Should return an employee with a name", () => {
        const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');

        expect(employee.name).toBeDefined();
        });
    });

    describe("id", () => {
        it("Should return an employee with a id", () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.id).toBeDefined();
            });
    });

    describe("email", () => {
        it("Should return an employee with a email", () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.email).toBeDefined();
            });
    });

    // describe("getID", () => {

    // });

    // describe("getName", () => {

    // });

    // describe("getEmail", () => {

    // });

    // describe("getRole", () => {

    // }); 
});