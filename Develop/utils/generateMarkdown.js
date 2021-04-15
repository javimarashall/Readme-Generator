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
function generateMarkdown(data) {
 console.log(data);
  return `# ${data.project}

## Description:
${data.description}

## Table of Contents:

* [Installation](#Installation)

* [Usage](#usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#tests)

* [Questions](#Questions)

## Installation
### To Install the necessary dependencies, run the following command:
${data.dependencies}

## Usage:
${data.tests}


## Questions
${data.username}
[GitHub](https://github.com/javimarashall)

${data.email}

`;         

}

module.exports = generateMarkdown;
