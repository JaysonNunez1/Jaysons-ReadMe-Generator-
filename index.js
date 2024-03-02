// TODO: Include packages needed for this application
const fs = require( "fs" );
const inquirer = require("inquirer");
const utils = require("util");
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
    type:"rawlist",
    name: "license",
    message: "Please select a license applicable to this project",
    choices:[
      "MIT License","Apache License 2.0","Boost1.0","MPL2.0","BSD2","None"],
      default:"MIT  License"
},
{
   type:"input",
   name:"features",
   message:"List any important features about your project here.",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if  (err) throw err;
        console.log("Success!");
    });
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();