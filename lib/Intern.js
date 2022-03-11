const Employee = require('./Employee');
// Intern Constructor class
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

// export Intern module
module.exports = Intern; 