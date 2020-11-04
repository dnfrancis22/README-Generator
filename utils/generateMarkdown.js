// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Horiseon-code-refactor

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
}

module.exports = generateMarkdown;
