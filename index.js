// TODO: Include packages needed for this application
const fs = require( "fs" );
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown =  require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
},
{
    type:"input",
    name:"description",
    message:"Provide a description and functionality of this project"
},
{
    type:"input",
    name:"link",
    message:"Link to your deployed project"
},
{
    type:"input",
    name:"features",
    message:"List any features that make your project stand out",
},
{
    type:"checkbox",
    name: "license",
    message: "Please select a license applicable to this project",
    choices:[
      "MIT License","Apache License 2.0","Boost1.0","MPL2.0","None"],
      default:"MIT  License"
},
{
    type:"input",
    name:"require",
    message:"List any dependencies used.",
},
{
   type:"input",
   name:"usage",
   message:"How to use the application.",
},
{
    type:"input",
    name:"creator",
    message:"Your github username.",
},
{
    type:"input",
    name:"email",
    message:"Your email address."
},
{
    type:"input",
    name:"contributors",
    message:"List any contributors",
    default:"",
},
{
    type:"input",
    name:"test",
    message:"required tests if needed?",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
   }

   // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Success");
        writeToFile("./utils/README.md", generateMarkdown({ ...responses }));
      });
    }

// Function call to initialize app
init();