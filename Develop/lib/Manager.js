// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager (name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.getName = () =>{
        return this.name;
    }
    this.getId = () =>{
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getOfficeNumber = () => {
        return this.officeNumber;
    }
    this.getRole = () => {
        return "Manager"
    }
}

module.exports = Manager;