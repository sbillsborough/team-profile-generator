// Requires in the necessary JS files 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const promptUser = require('./lib/promptUser')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

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

// function to initialize program
function init() {
  promptUser();
}


// function call to initialize program
init();
