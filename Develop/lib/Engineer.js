// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github){
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () =>{
        return this.name;
    }
    this.getId = () =>{
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.github = github;
    this.getGithub = () =>{
        return github
    }
    this.getRole = () =>{
        return "Engineer"
    }
}
module.exports = Engineer