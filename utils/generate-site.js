// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

// function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://opensource.org/licenses/MIT'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// function to generate the README.md
function generateReadme(answer) {
  console.log ('answer',answer)
  // return"test"
  return`
  # ${answer.ProjectHeader}

  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [Usage](#usage)
  ###  * [Installation](#installation)
  ###  * [License](#license)
  ###  * [Contributing](#contributing)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)
  ###  * [Credits](#credits)
  
  -------

  ### Usage:
  ### ${answer.usage}
  -------
  ### Installation
  ${answer.installation}

  -------
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}
  
  -------

  ### Contributors:
  ### ${answer.contributions}
  -------
  ### Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${answer.tests}
  -------
  ### Credits:
  ${answer.questions}
 ### Contact Information:
 *GitHub Username: ${answer.userName}
 
 
`;
}


module.exports = {generateReadme};