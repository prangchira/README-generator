// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}\n
  ## Description\n
  ${data.Description}
  ## Table of Contents\n
  [Installation](### Installation)
  [Usage](### Usage)
  [License](### License)
  [Contributing](### Contributing)

  ### Installation
  
  ### Usage

  ### License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ### Contributing
`;
}

module.exports = generateMarkdown;
