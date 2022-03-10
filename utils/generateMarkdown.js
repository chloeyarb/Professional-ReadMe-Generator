// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-orange.svg)`
}

// TODO: Create a function to generate markdown for README
//continue adding the sections for the readme and parts for the Table of Contents 
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Test

${data.test}

## Questions 

* To check out my GitHub profile use this username: ${data.github}
* For additional questions regarding this project I can be reached at ${data.email}

`;
}

module.exports = generateMarkdown;
