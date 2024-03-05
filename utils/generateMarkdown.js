// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''};
}

switch (license) {
  case 'MIT':
    badge = '[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
    case 'Apache 2.0':
      badge = '[![License:Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
      default:
        badge= '';
        return badge;
      }
const badge = renderLicenseBadge('MIT');


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}
let link = '';
switch (license) {
  case "MIT":
   link = `https://opensource.org/licenses/MIT`;
   break;
   case "Apache 2.0":
     link = 'https://opensource.org/licenses/Apache-2.0';
     break;
     default:
       link = '';
       const link = renderLicenseLink("MIT");
}
return link;


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;