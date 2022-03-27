// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const {generateReadme} = require('./utils/generate-site.js');
const file = './readme/README.md'


const questions = [
        {
        type: 'input',
        name: 'ProjectHeader',
        message: 'What is your project name? (Required)',
        validate: ProjectHeaderInput => {
          if (ProjectHeaderInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Description',
        message: 'tell me a breif summary of your project, what was your reasoning for the project,what problem does it solve. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your description!');
            return false;
          }
        }
      },
     
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?'
      },
     
     {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any?'
        },
        
        {
        type: 'checkbox',
        name: 'license',
        message: 'Choose which license you used for this project',
        choices: [
          'Apache',
          'Academic',
          'GNU',
          'ISC',
          'MIT',
          'Mozilla',
          'Open'
          ]
        },
        
        {
          type: 'input',
          name: 'tests',
          message: 'Is there a test included?',
         
        },
        {
        type: 'input',
        name: 'questions',
        message: 'What do I do if I have an issue? '
       },
      {
       type: 'input',
       name: 'askMe',
       message: 'What is your Github username so others can reach you for questions?'
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email address (for questions on app)'
   },
  
];
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log ("fileName",fileName)
  console.log ('data',data)
  const pageReadMe = generateReadme(data);
  console.log ('pageReadMe',pageReadMe)
  fs.writeFile(fileName, pageReadMe, err => {
      if (err) throw new Error(err);
      console.log('👐  README SUCCESSFUL! click on the README file in this directory');
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          writeToFile(file, answers)
      })
      .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        });
};

// Function call to initialize app
init()