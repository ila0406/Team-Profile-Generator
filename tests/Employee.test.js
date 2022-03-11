const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("name", () => {
        // test employee.name (10/16)
        it("Should return an employee with a name", () => {
        const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');

        expect(employee.name).toBeDefined();
        });
    });

    describe("id", () => {
        // test employee.id (11/16)
        it("Should return an employee with a id", () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.id).toBeDefined();
            });
    });

    describe("email", () => {
        // test employee.email (12/16)
        it("Should return an employee with a email", () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.email).toBeDefined();
            });
    });

    describe("getID", () => {
        // test employee.getID (13/16)
        it('Gets the employee ID', () => {
            const employee = new Employee('Delilah', 1, 'ila0406@gmail.com');
    
            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    describe("getName", () => {
        // test employee.getName (14/16)
        it('Gets the employee name', () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    describe("getEmail", () => {
        // test employee.getEmail (15/16)
        it('Gets the employee email', () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    describe("getRole", () => {
        // test employee.getRole (16/16)
        it('Gets the role of employee', () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.getRole()).toEqual("Employee");
        });
    }); 
});