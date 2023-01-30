// Require in Employee parent class
const Employee = require("./Employee");

// Manager class creater
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
};

// Exports the Manager module
module.exports = Manager;