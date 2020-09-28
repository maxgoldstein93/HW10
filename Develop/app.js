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
const employess = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("Please build your team")
const managerQuestions =[
    {
        type: "input",
        message: "What is your Managers Name? ",
        name: "name"

    }, {
        type: "input",
        message: "What is your Managers id? ",
        name: "id"
    }, {
        type: "input",
        message: "What is your Managers email? ",
        name: "email"
    }, {
        type: "input",
        message: "What is your Managers office number? ",
        name: "officeNumber"
    }];
    
    const employeeType = [{
        type: "list",
        message: "What kind of employee do you want to add next?",
        name:"etype",
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
        name: "name"

    }, {
        type: "input",
        message: "What is your Engineers id? ",
        name: "id"
    }, {
        type: "input",
        message: "What is your Engineers email? ",
        name: "email"
    }, {
        type: "input",
        message: "What is your Engineers Github name? ",
        name: "github"
    }];

    prompt1();
    function prompt1 (){
        inquirer
            .prompt(managerQuestions)
            .then(managerAnswers =>{
                console.log(managerAnswers);
                // const manager = new Manager(managerAnswers.name, id, email, officeNumber);
                // employees.push(manager);
                prompt2();
                   
            });
    } 

    function prompt2(){
        inquirer.prompt(employeeType).then(employeeAnswers=>{
            console.log(employeeAnswers);
            if(employeeAnswers.etype === "Engineer"){
                prompt3(); 
                
            }
        });
    }
    
    function prompt3(){
        inquirer.prompt(engineerQuestions).then(engineerAnswers =>{
            console.log(engineerAnswers);
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

// const html = render(employees);
// fs.writeFile(outputPath, html, function (err) {
//     if (err) {
//         throw err;

//     } else {
//         console.log("Success!")
//     }

// })
