// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
// const { writeFile, copyFile } = require('./utils/generate-site');
// const { type } = require('os');
// const utils = require(“utils”);

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
        message: 'tell me a breif summary of your project. (Required)',
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
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
     
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any:',
        when: ({ confirmAbout }) => confirmAbout
      },
      
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?'
      },

      {
        type: 'list',
        name:'liscense',
        message: 'Chose the appropriate license for this project: ',
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
        name: 'questions',
        message: 'What do I do if I have an issue? '
     },
     {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:'
        },
     {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:'
    
        }
    ])
    .then(responses =>{
        console.log(responses);
    });
};
promptUser()
     

// .then(responses =>{
//     writeReadMeFile(responses);
//     console.log(responses);
// });
// ])
// // promptUser()
// // .then(responses =>{
// //     writeReadMeFile(responses);
// //     console.log(responses);

//   promptUser()
//     .then(promptProject)
    
//     // Async function using util.promisify 
//   async function init() {
//     try {
//         // Ask user questions and generate responses
//         const answers = await promptUser();
//         const generateContent = generateReadme(answers);
//         // Write new README.md to dist directory
//         await writeFileAsync('./dist/README.md', generateContent);
//         console.log('✔️  Successfully wrote to README.md');
//     }   catch(err) {
//         console.log(err);
//     }
// 