function renderLicenseBadge(License) {
  if (License !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${License}-blue.svg)`;
  }
  return '';
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}\n
  ${renderLicenseBadge(data.License)}
  ## Description\n
  ${data.Description}
  ## Table of Contents\n
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributing
  ${data.Contributing}



  ## Questions\n
  For additional questions, please see the contact detail below:\n
  Author: ${data.Fullname}\n
  Email: ${data.Email}\n
  or click here for my [Github]( https://github.com/${data.Github}) link\n
  
`;
}

module.exports = generateMarkdown;
