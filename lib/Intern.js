// Require in Employee parent class
const Employee = require("./Employee");

// Intern class constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }

};

// Export Intern module
module.exports = Intern;
