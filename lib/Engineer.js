const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email);
    this.githubUsername= githubUsername;
  }

  getGitHub(){
    return `https://github.com/${this.githubUsername}`; 
  }

  getRole(){
    return "Engineer"; 
  }
}

module.exports = Engineer;  