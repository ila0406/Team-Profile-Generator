// const generateMarkdown = require('./utils/generateMarkdown');
const generateHTML = require('./lib/generateHTML');
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const teamMembers = [];

// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        },
        {
            type: 'confirm',
            name: 'moreEmployees',
            message: 'Would you like to add more employees to your team?',
            default: false
        }
    ])
    .then (employeeResponse => {

        let { name, id, email, role, officeNumber, github, school, addEmployees } = employeeResponse; 
        let employee; 

        if (role === "Manager") {
            employee = new Manager (name, id, email, officeNumber);
        }
        else if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        // pushing the returned data the the teamMembers array
        teamMembers.push(employee); 

        if (addEmployees) {
            return addEmployee(teamMembers); 
        } else {
            return teamMembers;
        }
    }) 
};


// Function to write HTML file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, JSON.stringify(data,null ,2), function(err) {
     fs.writeFile(fileName, generateHTML(data), function(err) { 
         console.log(err)
     })
 }

// Function to initialize app
function init() {
    // inquirer.prompt(questions)
    questions()
        .then(answers => {
            console.log(answers)
             writeToFile('./dist/index.html',answers);
            // writeToFile('../../Generated-Readme/README.md',answers);
        }
    );
}

// // Function call to initialize app
init();

questions()
// addManager()
//     .then(addEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(htmlData => {
        return writeFile(htmlData);
    })
    .catch(err => {
        console.log(err);
    });