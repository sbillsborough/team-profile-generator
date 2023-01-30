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