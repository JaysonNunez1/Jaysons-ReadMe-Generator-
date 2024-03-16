// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
if (license !== "None"){
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !==  'None') {
    return `\n* [License](#license)\n`;
  }
  return " ";
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !='None') {
    return `## License 
    licensed under the ${license} license.`;
  }
  return "";
  }
   

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [Features](#features)
  * [Dependencies](#dependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Features
  ${data.features}
  ## Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}

  ## Questions
  For any questions or concerns about this project, please reach out to me [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  } 

module.exports = generateMarkdown;