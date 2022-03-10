// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?', 
        validate: projectName => {
            if (projectName) {
              return true;
            } else {
              console.log ('Please enter your project name');
            }
          } 
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'Please provide a description of project.', 
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log ('Please enter project description');
            }
          }
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions for this project?',
    },
    {
        type: 'list', 
        name: 'license',
        message: 'What licenses are used with this project?',
        choices: ['None','MIT', 'Apache', 'Boost', 'Mozilla', 'Eclipse Public'],
    }, 
    {
        type: 'input', 
        name: 'contributors',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Enter your email address.', 
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
            writeToFile('generatedReadme.md', generateMarkdown({...data}))
        })
}

// Function call to initialize app
init();

// TODO: Create a function to write README file
//passing two the file name and data
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
