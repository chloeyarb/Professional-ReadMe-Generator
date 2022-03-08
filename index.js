// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
//path to add the README path = require('path')

// TODO: Create an array of questions for user input
//insert remaining questions
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
        type: 'list', 
        name: 'license',
        message: 'What licenses are used with this project?',
        choices: ['MIT', 'Apache', 'Boost', 'Mozilla'],
    }, 
    {
        type: 'input', 
        name: 'contributors',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'Enter your email address', 
    }
];


// TODO: Create a function to initialize app
//inquire.prompt, then, address the path., catch for errors, Google FS.writefile
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
