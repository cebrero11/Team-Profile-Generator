const Manager = require('../lib/Manager');

describe("Manager class", () => {
      describe("getRole method", () => {
        it("returns role of manager", () => {
            const manager= new Manager("Christian", 1, "random@gmail.com", 5);
            expect(manager.getRole()).toBe("Manager"); 
        });
      });
  });