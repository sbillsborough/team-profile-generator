// Requires in the necessary JS files 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let teamArray = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Prompts the user for which type of employee they would like to add
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
    };
  });
};

function createManager() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter manager\'s name.',
      name: 'mngrName',
      validate: (mngrName) => {
        if (mngrName) {
          return true;
        }
        else {
          console.log('Enter manager\'s name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter manager\'s ID.',
      name: 'mngrId',
      validate: (mngrId) => {
        if (mngrId) {
          return true;
        }
        else {
          console.log('Enter manager\'s name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter manager\'s email.',
      name: 'mngrEmail',
      validate: (mngrEmail) => {
        if (mngrEmail) {
          return true;
        }
        else {
          console.log('Enter manager\'s email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter manager\'s office number.',
      name: 'mngrOfficeNumber',
      validate: (mngrOfficeNumber) => {
        if (mngrOfficeNumber) {
          return true;
        }
        else {
          console.log('Enter manager\'s office number.');
          return false;
        }
      }
    },
  ]).then((answers) => {
    const Manager = new Manager(answers.mngrName, answers.mngrId, answers.mngrEmail, answers.mngrOfficeNumber);
    teamArray.push(Manager);
    run();
  });
}

function createEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Engineer\'s name.',
      name: 'engrName',
      validate: (engrName) => {
        if (engrName) {
          return true;
        }
        else {
          console.log('Enter Engineer\'s name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter Engineer\'s ID.',
      name: 'engrId',
      validate: (engrID) => {
        if (engrID) {
          return true;
        }
        else {
          console.log('Enter Engineer\'s ID.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter Engineer\'s email.',
      name: 'engrEmail',
      validate: (engrEmail) => {
        if (engrEmail) {
          return true;
        }
        else {
          console.log('Enter Engineer\'s email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter Engineer\'s GitHub username.',
      name: 'github',
      validate: (github) => {
        if (github) {
          return true;
        }
        else {
          console.log('Enter Engineer\'s GitHub username.');
          return false;
        }
      }
    },
  ]).then((answers) => {
    const Engineer = new Engineer(answers.engrName, answers.engrId, answers.engrEmail, answers.github);
    teamArray.push(Engineer);
    run();
  });
}



// function to initialize program
function init() {
  promptUser();
}


// function call to initialize program
init();
