const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("getName method", () => {
      it("returns name of employee", () => {
        const employee = new Employee("Christian", 1, "random@gmail.com");
        expect(employee.getName()).toBe("Christian");
      });
    });
  
    describe("getID method", () => {
      it("returns id of employee", () => {
        const employee = new Employee("Christian", 1, "random@gmail.com");
        expect(employee.getId()).toBe(1);
      });
    });

    describe("getEmail method", () => {
        it("returns email of employee", () => {
            const employee = new Employee("Christian", 1, "random@gmail.com");
            expect(employee.getEmail()).toBe("random@gmail.com");
        });
      });

      describe("getRole method", () => {
        it("returns role of employee", () => {
            const employee = new Employee("Christian", 1, "random@gmail.com");
            expect(employee.getRole()).toBe("Employee"); 
        });
      });
  });