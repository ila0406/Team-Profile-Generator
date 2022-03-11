class Employee {

    // construct employee class
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name from users input
    getName () {
        return this.name;
    }

    // returning ID from users input
    getId () {
        return this.id;
    }   

    // returning email from users input
    getEmail () {
        return this.email;
    }

    // returning employee role from users input
    getRole () {
        return 'Employee'; 
    }
};

// export employee module
module.exports = Employee; 