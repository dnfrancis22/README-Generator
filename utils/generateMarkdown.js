// function to generate markdown for README

const generateMarkdown = (response) => {
  const markdownTemplate = `# ${response.Title}

## Description

${response.Description}

## Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${response.Installation}

## Usage

${response.Usage}

## License

${response.License}

## Contributing

${response.Contributing}

## Test

${response.Test}

## Questions

If you you have further questions feel free to email me at: ${response.EmailAddress}
You can check out the repository at: https://github.com/${response.Username}

`;
return markdownTemplate
}

module.exports = generateMarkdown;
