// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const { writeFile, copyFile } = require('./utils/generate-site').default;


const promptUser = () => {
    return inquirer.prompt([
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
          }
    ])
    .then(responses =>{
        console.log(responses);
    });
};

promptUser()
.then(promptProject)
.then(readMe => {
  return generatePage(readMe);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});
  

