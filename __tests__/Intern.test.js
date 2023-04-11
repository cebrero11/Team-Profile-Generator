const Intern = require('../lib/Intern');

describe("Intern class", () => {
    describe("getGitHub method", () => {
      it("returns school", () => {
        const intern = new Intern("Christian", 1, "random@gmail.com", "SJSU");
        expect(intern.getSchool()).toBe("SJSU");
      });
    });

      describe("getRole method", () => {
        it("returns role of intern", () => {
            const intern= new Intern("Christian", 1, "random@gmail.com", "SJSU");
            expect(intern.getRole()).toBe("Intern"); 
        });
      });
  });