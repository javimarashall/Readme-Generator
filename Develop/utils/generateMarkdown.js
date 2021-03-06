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

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description:
\`\`\`
${data.description}
\`\`\`
## Table of Contents:

* [Installation](#Installation)

* [Usage](#usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation
### To Install the necessary dependencies, run the following command:
\`\`\`
${data.dependencies}
\`\`\`
## Usage:
### Languages to know for using the repo:
\`\`\`
${data.repo}
\`\`\`
## License
### This application is covered under:
\`\`\`
${data.license}
\`\`\`
## Contributing
### Languages to know for contributing:
\`\`\`
${data.contributing}
\`\`\`
## Tests
### Commands to know for running tests:
\`\`\`
${data.tests}
\`\`\`
## Questions?
### If you have questions please contact me:
\`\`\`
GitHub username: ${data.username}
[GitHub](https://github.com/javimarashall)
E-Mail: ${data.email}
\`\`\`
`;         

}

module.exports = generateMarkdown;
