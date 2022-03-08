// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)', 
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'Please provide a description of project', 
    }, 
    {
        type: 'input', 
        name: 'table of contents', 
        message: 'Please provide a Table of Contents', 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
