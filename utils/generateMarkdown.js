// function to generate markdown for README

const generateMarkdown = (response) => {
  const markdownTemplate = `
# ${response.title}

## Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description

## Installation

## Usage

## License

## Contributing

## Tests

## Questions

`;
return markdownTemplate
}

module.exports = generateMarkdown;
