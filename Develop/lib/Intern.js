// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern (name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.getName = () =>{
        return this.name;
    }
    this.getId = () =>{
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getRole = () => {
        return "Intern"
    }
    this.getSchool = () => {
        return this.school;
    }
}

module.exports = Intern;