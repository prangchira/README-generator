const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const dir = './output';
const OutputFilename = 'README.md'

// array of questions for user
const questions = [

];

// // function to write README file
function writeToFile(filename, data){
    fs.writeFile(filename, data, err=>{
        if (err){
            console.error(err);
        }else
        {
            console.log(`${OutputFilename} file is generated in ${dir} folder`)
        }
    })
} 

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'ProjectTitle',
            message: 'Please input the Project Title:'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please input the Project Description:'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please input the Installation detail:'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please input the Project Usage:'
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please select the License:',
            choices: [
                "Apache", 
                "GNU",
                "MIT",
                "BSD2",
                "BSD3",
                "Boost Software",
                "Creative Commons Zero",
                "Eclipse",
                "Mozilla"
            ]
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Please input the Contributing detail:'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Please input the Tests detail:'
        },
        {
            type: 'input',
            name: 'Fullname',
            message: 'Please input your full name:'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Please input your Email:'
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Please input your Github Username:'
        }

    ])
    .then((answers)=>{
        console.log(answers);
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        writeToFile(path.join(dir,'./',OutputFilename), generateMarkdown({...answers}))
    });
}

// function call to initialize program
init();

