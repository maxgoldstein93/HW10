const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");
const { prompt } = require("inquirer");
const employees = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("Please build your team")
const managerQuestions = [
    {
        type: "input",
        message: "What is your Managers Name? ",
        name: "name",
        validate: function (inputtxt) {
            var letters = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
            var validate = inputtxt.match(letters);
            if (validate) {
                return true;
            }
            else {
                return "Please use first and last name"
            }
        }

    }, {
        type: "input",
        message: "What is your Managers id? ",
        name: "id",
        validate: function (nums) {
            var idCheck = nums.match(/^([0-9]{1,4})$/)
            if (idCheck) {
                return (true)
            }
            return "Please enter a valid id between number 0-9 and maximum lenght of 4"
        }
    }, {
        type: "input",
        message: "What is your Managers email? ",
        name: "email",
        validate: function (mail) {
            var emailCheck = mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            if (emailCheck) {
                return (true)
            }

            return "Please enter valid email such as example@email.com"
        }
    }, {
        type: "input",
        message: "What is your Managers office number? ",
        name: "officeNumber",
        validate: function (nums) {
            var idCheck = nums.match(/^([0-9]{1,4})$/)
            if (idCheck) {
                return (true)
            }
            return "Please enter a valid office number between 0-9 and a maximum lenght of 4"
        }
    }];

const employeeType = [{
    type: "list",
    message: "What kind of employee do you want to add next?",
    name: "etype",
    choices: [
        "Engineer",
        "Intern",
        "None"
    ]

}];

const engineerQuestions = [
    {
        type: "input",
        message: "What is your Engineers Name? ",
        name: "name",
        validate: function (inputtxt) {
            var letters = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
            var validate = inputtxt.match(letters);
            if (validate) {
                return true;
            }
            else {
                return "Please use first and last name"
            }
        }

    }, {
        type: "input",
        message: "What is your Engineers id? ",
        name: "id",
        validate: function (nums) {
            var idCheck = nums.match(/^([0-9]{1,4})$/)
            if (idCheck) {
                return (true)
            }
            return "Please enter a valid id between number 0-9 and maximum lenght of 4"
        }
    }, {
        type: "input",
        message: "What is your Engineers email? ",
        name: "email",
        validate: function (mail) {
            var emailCheck = mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            if (emailCheck) {
                return (true)
            }
            return "Please enter valid email such as example@email.com"
        }

    }, {
        type: "input",
        message: "What is your Engineers Github name? ",
        name: "github",

    }];

const internQuestions = [
    {
        type: "input",
        message: "What is your Interns Name? ",
        name: "name",
        validate: function (inputtxt) {
            var letters = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
            var validate = inputtxt.match(letters);
            if (validate) {
                return true;
            }
            else {
                return "Please use first and last name"
            }
        }

    }, {
        type: "input",
        message: "What is your Interns id? ",
        name: "id",
        validate: function (nums) {
            var idCheck = nums.match(/^([0-9]{1,4})$/)
            if (idCheck) {
                return (true)
            }
            return "Please enter a valid id between number 0-9 and maximum lenght of 4"
        }
    }, {
        type: "input",
        message: "What is your Interns email? ",
        name: "email",
        validate: function (mail) {
            var emailCheck = mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            if (emailCheck) {
                return (true)
            }

            return "Please enter valid email such as example@email.com"
        }
    }, {
        type: "input",
        message: "What is your Interns College? ",
        name: "college",
        validate: function (inputtxt) {
            var letters = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
            var validate = inputtxt.match(letters);
            if (validate) {
                return true;
            }
            else {
                return "Please enter a valid College or University"
            }
        }
    }];

prompt1();
function prompt1() {
    inquirer
        .prompt(managerQuestions)
        .then(managerAnswers => {
            const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
            employees.push(manager);
            prompt2();

        });
}

function prompt2() {
    inquirer.prompt(employeeType).then(employeeAnswers => {
        if (employeeAnswers.etype === "Engineer") {
            prompt3();
        } else if (employeeAnswers.etype === "Intern") {
            prompt4()
        } else {
            const html = render(employees);
            fs.writeFile(outputPath, html, function (err) {
                if (err) {
                    throw err;

                } else {
                    console.log("Success!")
                }

            })




        }
    });
}

function prompt3() {
    inquirer.prompt(engineerQuestions).then(engineerAnswers => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        employees.push(engineer);
        prompt2()
    });
}
function prompt4() {
    inquirer.prompt(internQuestions).then(internAnswers => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.college);
        employees.push(intern);
        prompt2()

    });

}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


