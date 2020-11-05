const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title',
      },
      {
        type: 'input',
        message: 'Describe your project.',
        name: 'Description',
      },
      {
        type: 'input',
        message: 'How do you install your project?',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'How do you use your project?',
        name: 'Usage',
      },
      {
        type: 'list',
        message: 'Select a license.',
        name: 'License',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'GNU GPLv2', 'ISC'],
      },
      {
        type: 'input',
        message: 'Enter the name of any contributors to your project?',
        name: 'Contributing',
      },
      {
        type: 'input',
        message: 'How do you test your project?',
        name: 'Test',
      },
      {
        type: 'input',
        message: 'What is your Github username?.',
        name: 'Username',
      },
      {
        type: 'input',
        message: 'What is your email address?.',
        name: 'EmailAddress',
      },


])
.then((response) => {
    console.log(response);
    const generatedMarkdown = generateMarkdown(response);

    fs.writeFile('newREADME.md', generatedMarkdown, 'UTF8', (err) => {
        if (err) throw err;
        console.log('The file has been Generated!');
      });
});


// function to write README file
// function writeToFile(fileName, data) {   
// }


// function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
