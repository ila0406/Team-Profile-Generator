// const generateMarkdown = require('./utils/generateMarkdown');
const generateHTML = require('./utils/generateHTML');

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

// return inquirer.prompt ([
//     {
//         type: 'list',
//         name: 'role',
//         message: "Please choose what you employee's role is",
//         choices: ['Engineer', 'Intern']
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: "What's is your employee's name?", 
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: "Please enter the employee's ID.",
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: "Please enter the employee's email.",
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: "Please enter your employee's github name.",
//         // adding a when field to make the prompt only visible when the role is an Engineer
//         when: (input) => input.role === "Engineer",
//     },
//     {
//         type: 'input',
//         name: 'school',
//         message: "Please enter the intern's school",
//         // added code to make the school question only visible to the Intern role
//         when: (input) => input.role === "Intern",
//     },


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
