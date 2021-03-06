// Generates employee profile card for Engineer
function generateEngrCard({role,name, id, email, github}) {
    return `<div class="engr bg-info">
    <h3 class="display-6">${name}</h3>
    <h5 class="display-6">Enigneer</h3>
    <ul class="list-group">
    <li class="list-group-item">Employee ID ${id}</li>
    <li class="list-group-item">Email address: <a href="mailto:${email}">${email}</a></li>
    <li class="list-group-item">GitHub Username: <a href="https://github.com/ila0406">${github}</a></li>
    </ul></div>`;
}

// Generates employee profile card for Manager
function generateManagerCard({role,name, id, email, officeNumber}) {
    return `<div class="manager bg-success">
    <h3 class="display-6">${name}</h3>
    <h5 class="display-6">Manager</h3>
    <ul class="list-group">
        <li class="list-group-item">Employee ID ${id}</li>
        <li class="list-group-item">Email address: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Office#: ${officeNumber}</li>
    </ul>
    </div>`;
}

// Generates employee profile card for Intern
function generateInternCard({role,name, id, email, school}) {
    return `<div class="intern bg-secondary">
    <h3 class="display-6">${name}</h3>
    <h5 class="display-6">Intern</h3>
    <ul class="list-group">
        <li class="list-group-item">Employee ID ${id}</li>
        <li class="list-group-item">Email address: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
    </ul>
    </div>`;
}

// Generates the rest of the HTML file with all employee profile cards
const generateHTML = function (employeeProfiles){
    // const generateHTML = ({role,name, id, email, officeNumber, github, school}) =>
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4 bg-warning https://hackerthemes.com/bootstrap-cheatsheet/">Project Team</h1>
        ${employeeProfiles}
        <br>
    </div>
    </div>
    </body>
    </html>`;
}

// Export all functions 
module.exports = {generateHTML, generateManagerCard, generateInternCard, generateEngrCard}