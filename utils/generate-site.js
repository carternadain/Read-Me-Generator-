// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  return `# ${data.title}

  ${data.licenseBadge}

---
## Description
 ${answers.description}
## Table of Contents
1.[Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)



## Installation
 ${answers.installation}


 ## Usage
 ${answers.usage}


 ## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

This application is covered by the ${answers.license} license. 


## Contributing
 ${answers.contributing}



## Tests
 ${answers.tests}



## Questions
 ${answers.questions}
 ### Contact Information:
 *GitHub Username: ${data.userName}
 *GitHub Email: ${data.userEmail}
 
`;
}

export default generateReadme;