// variables needed for this application
const {generateHTML, generateManagerCard, generateInternCard, generateEngrCard} = require('./lib/generateHTML');
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const teamMembers = [];

// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions to prompt the user for information about their team
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
        // takes users input to generate employee cards for HTML export
        let { name, id, email, role, officeNumber, github, school, moreEmployees } = employeeResponse; 
        let employee; 
        let employeeObject;

        if (role === "Manager") {
            employeeObject= new Manager (name, id, email, officeNumber);
            employee = generateManagerCard(employeeObject);
        }
        else if (role === "Engineer") {
            employeeObject = new Engineer (name, id, email, github);
            employee = generateEngrCard(employeeObject);

        } else if (role === "Intern") {
            employeeObject = new Intern (name, id, email, school);
            employee = generateInternCard(employeeObject);
        }

        teamMembers.push(employee); 

        // Keep cycling through questions prompt if more team members are needed
        if (moreEmployees) {
            return questions(); 
        } else {
            return teamMembers;
        }
    }) 
};


// Function to write HTML file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, generateHTML(data.join('')), function(err) { 
         console.log(err)
     })
 }

// Function to initialize app
function init() {
    questions()
        .then(answers => {
            console.log(answers)
             writeToFile('./dist/index.html',answers);
        }
    );
}

// Function call to initialize app
init();