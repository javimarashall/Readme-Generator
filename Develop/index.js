// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your e-mail address?',
    },
    {
        type: 'input', 
        name: 'project',
        message: "What is your project's name?",
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list', 
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE2.0', 'BSD3', 'GPL3.0']
    },
    {
        type: 'input', 
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input', 
        name: 'tests',
        message: 'What command should be run to tests?',
    },
    {
        type: 'checkbox', 
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
        choices: ['HTML', 'CSS', 'JS'],
    },
    {
        type: 'checkbox', 
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        choices: ['HTML', 'CSS', 'JS'],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('worked')
)};
    
console.log(writeToFile);
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        //store the answers in data
        const data = generateMarkdown(response);
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
