const Employee = require("../lib/Employee");

describe("Employee", () => {
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

    describe("getID", () => {
        it('Gets the employee ID', () => {
            const employee = new Employee('Delilah', 1, 'ila0406@gmail.com');
    
            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    describe("getName", () => {
        it('Gets the employee name', () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    describe("getEmail", () => {
        it('Gets the employee email', () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    describe("getRole", () => {
        it('Gets the role of employee', () => {
            const employee = new Employee('Delilah', '1', 'ila0406@gmail.com');
    
            expect(employee.getRole()).toEqual("Employee");
        });
    }); 
});