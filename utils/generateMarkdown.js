function AddLicenseBadge(License) {
  if (License !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${License}-blue.svg)`;
  }
  return '';
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}\n

  ${AddLicenseBadge(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}

  ## License
  This application is covered under ${data.License} license.

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  For additional questions, please see the contact detail below:\n
  Author: ${data.Fullname}\n
  Email: ${data.Email}\n
  Click here for my [Github]( https://github.com/${data.Github}) link\n
  
`;
}

module.exports = generateMarkdown;
