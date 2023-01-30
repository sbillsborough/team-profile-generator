// requires in File System, Path and Inquirer

const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateHtml = require('./createTeam')

// Prompts for the user to generate the team members
function promptUser() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Which employee role would you like to add?',
      name: 'employeeRoll',
      choices: ['Manager', 'Engineer', 'Intern', 'None']
    }
  ]).then(function (userInput) {
    if (userInput.employeeRoll === 'Manager') {
      createManager();
    } else if (userInput.employeeRoll === 'Engineer') {
      createEngineer();
    } else if (userInput.employeeRoll === 'Intern') {
      createIntern();
    } else if (userInput.employeeRoll === 'None') {
      createTeam();
    }
  })
}

module.exports = promptUser;