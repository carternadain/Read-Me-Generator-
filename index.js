// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const generatePage = require('./utils/generate-site');
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
        name: 'table of contents ',
        message: 'optional add a table of contents',
       
      },
      
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?'
      },
     
     {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors of this projects?'
        },
        {
        type: 'input',
        name: 'tests',
        message: 'Is there a test included?'
        },
        
        {
          type: 'input',
          name: 'installation',
          message: 'Describe the installation process if any:',
         
        },
        {
        type: 'input',
        name: 'questions',
        message: 'What do I do if I have an issue? '
     },
     {
        type: 'input',
        name: 'credits',
        message: 'list all Collabarators, if any, add links to there github'
        },
     {
        type: 'list',
        name: 'liscense',
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
];    
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const pageReadMe = generatePage(data);
  fs.writeFile(fileName, pageReadMe, err => {
      if (err) throw new Error(err);
      console.log('README created! Check out README.md in this directory to see it!');
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