// const generateMarkdown = require('./utils/generateMarkdown');
const generateHTML = require('./utils/generateHTML');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter team managers name:',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'Enter managers employee ID:',
        name: 'managerID'
    },
    {
        type: 'input',
        message: 'Enter managers email address:',
        name: 'mangerEmail'
    },
    {
        type: 'input',
        message: 'Enter managers office number:',
        name: 'managerOffice'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, JSON.stringify(data,null ,2), function(err) {
     fs.writeFile(fileName, generateHTML(data), function(err) { 
         console.log(err)
     })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
             writeToFile('./utils/index.html',answers);
            // writeToFile('../../Generated-Readme/README.md',answers);
        }
    );
}

// Function call to initialize app
init();
