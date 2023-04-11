const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    describe("getGitHub method", () => {
      it("returns github address", () => {
        const engineer = new Engineer("Christian", 1, "random@gmail.com", "cebrero11");
        expect(engineer.getGitHub()).toBe("https://github.com/cebrero11");
      });
    });

      describe("getRole method", () => {
        it("returns role of engineer", () => {
            const engineer= new Engineer("Christian", 1, "random@gmail.com");
            expect(engineer.getRole()).toBe("Engineer"); 
        });
      });
  });