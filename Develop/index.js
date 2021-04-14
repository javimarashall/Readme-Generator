// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'checkbox', 
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache License 2.0', 'Boost Software License', 'Mozilla Public License']
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
