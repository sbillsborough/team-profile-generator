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
    const manager = new Manager(answers.mngrName, answers.mngrId, answers.mngrEmail, answers.mngrOfficeNumber);
    teamArray.push(manager);
    init();
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
    const engineer = new Engineer(answers.engrName, answers.engrId, answers.engrEmail, answers.github);
    teamArray.push(engineer);
    init();
  });
}

function createIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Intern\'s name.',
      name: 'intrnName',
      validate: (intrnName) => {
        if (intrnName) {
          return true;
        }
        else {
          console.log('Enter Intern\'s name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter Intern\'s ID.',
      name: 'intrnId',
      validate: (intrnId) => {
        if (intrnId) {
          return true;
        }
        else {
          console.log('Enter Intern\'s name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter Intern\'s email.',
      name: 'intrnEmail',
      validate: (intrnEmail) => {
        if (intrnEmail) {
          return true;
        }
        else {
          console.log('Enter Intern\'s email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Enter Intern\'s school name.',
      name: 'school',
      validate: (school) => {
        if (school) {
          return true;
        }
        else {
          console.log('Enter Intern\'s school name.');
          return false;
        }
      }
    },
  ]).then((answers) => {
    const intern = new Intern(answers.intrnName, answers.intrnId, answers.intrnEmail, answers.school);
    teamArray.push(intern);
    init();
  });
}

function createTeam() {
  console.log("Team has successfully been created!")
  fs.writeFile('./result_html/index.html', render(teamArray), function (err) {
    if (err) {
      return console.log(err)
    }
  });
}


// function to initialize program
function init() {
  promptUser();
}


// function call to initialize program
init();
