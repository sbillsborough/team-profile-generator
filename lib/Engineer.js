// Require in Employee parent class
const Employee = require("./Employee");

// Engineer class creater
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

// Exports the Engineer module
module.exports = Engineer;