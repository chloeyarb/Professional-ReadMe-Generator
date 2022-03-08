// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-orange.svg)`
}

// TODO: Create a function to generate markdown for README
//continue adding the sections for the readme and parts for the Table of COntents 
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

* [License](#license)


## License

${data.license}



`;
}

module.exports = generateMarkdown;
