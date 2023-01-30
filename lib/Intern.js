// Require in Employee parent class
const Employee = require("./Employee");

// Intern class constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school);
    this.school = school;
  }
}

// Export Intern module
module.exports = Intern;
