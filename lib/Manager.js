const Employee = require('./Employee');
// construct manager class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }
}

// export manager module
module.exports = Manager; 