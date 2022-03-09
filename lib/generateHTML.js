// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateHTML(data) {
//   return `# ${data.title}

// `;
// }
const generateHTML = ({role,name, id, email, officeNumber, github,school}) =>
  `<!DOCTYPE html>
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
    <p class="lead">Manager Employee ID ${id}.</p>
    <h3 class="display-6">Team Manager: ${name}</h3>
    <ul class="list-group">
        <li class="list-group-item">Team Manager: ${name}</li>
        <li class="list-group-item">Manager Employee ID ${id}</li>
        <li class="list-group-item">Manager's email address: ${email}</li>
        <li class="list-group-item">Manager's Office Number: ${officeNumber}</li>
        <li class="list-group-item">Intern's School: ${school}</li>
        <li class="list-group-item">Engineer's GitHub Username: ${github}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

module.exports = generateHTML;
