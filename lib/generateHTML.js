function generateEngrCard({role,name, id, email, github}) {
    return `    <p class="lead">Manager Employee ID ${id}.</p>
    <h3 class="display-6">Team Manager: ${name}</h3>
    <ul class="list-group">
        <li class="list-group-item">Team Manager: ${name}</li>
        <li class="list-group-item">Manager Employee ID ${id}</li>
        <li class="list-group-item">Manager's email address: ${email}</li>
        <li class="list-group-item">Engineer's GitHub Username: ${github}</li>
    </ul>`;
}


function generateManagerCard({role,name, id, email, officeNumber}) {
    return `    <p class="lead">Manager Employee ID ${id}.</p>
    <h3 class="display-6">Team Manager: ${name}</h3>
    <ul class="list-group">
        <li class="list-group-item">Team Manager: ${name}</li>
        <li class="list-group-item">Manager Employee ID ${id}</li>
        <li class="list-group-item">Manager's email address: ${email}</li>
        <li class="list-group-item">Manager's Office Number: ${officeNumber}</li>
    </ul>`;
}

function generateInternCard({role,name, id, email, school}) {
    return `    <p class="lead">Manager Employee ID ${id}.</p>
    <h3 class="display-6">Team Manager: ${name}</h3>
    <ul class="list-group">
        <li class="list-group-item">Team Manager: ${name}</li>
        <li class="list-group-item">Manager Employee ID ${id}</li>
        <li class="list-group-item">Manager's email address: ${email}</li>
        <li class="list-group-item">Intern's School: ${school}</li>
    </ul>`;
}

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
        <h1 class="display-4">Project Team</h1>
        ${employeeProfiles}
    </div>
    </div>
    </body>
    </html>`;
}

module.exports = {generateHTML, generateManagerCard, generateInternCard, generateEngrCard}