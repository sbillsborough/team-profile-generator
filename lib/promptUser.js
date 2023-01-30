// requires in File System, Path and Inquirer

const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');

// Prompts for the user to generate the team members
function promptUser() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Which employee role would you like to add?',
      name: 'employeeRoll',
      choices: ['Manager', 'Engineer', 'Intern', 'None']
    }
  ])
}

module.exports = promptUser;