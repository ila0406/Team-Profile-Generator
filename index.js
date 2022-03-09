// const generateMarkdown = require('./utils/generateMarkdown');
const generateHTML = require('./lib/generateHTML');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Emma Reimer (she/her)  1 day ago
// Yes - my menu function asks:
// Do you want to (with choices)
// Add an engineer
// Add an intern
// Finish building team
// And it gets called after every function
// And then I have one more function renderHtml that gets called if they select finish building team

// An array of questions for user input
const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Select type of employee',
        choices: ['Manager','Engineer','Intern']
    },
    {
        type: 'input',
        message: 'Enter employees name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter employees ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter employees email address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter office number:',
        name: 'officeNumber',
        when: (input) => input.role === "Manager",
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer's github name:",
        when: (input) => input.role === "Engineer",
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:",
        when: (input) => input.role === "Intern",
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
             writeToFile('./dist/index.html',answers);
            // writeToFile('../../Generated-Readme/README.md',answers);
        }
    );
}

// Function call to initialize app
init();