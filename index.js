const inquirer = require("inquirer");
const Employee = require("./lib/Employee"); 
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateMarkdown = require('./src/generateMarkdown');

const { exit } = require('process');
const path = require("path");
const fs = require("fs");

const team = []; 

function generateQuestions(role){
    var questions = [     {
        type: "input",
        name: "name",
        message: `What is the name of the ${role}?`,
      },
      {
        type: "number",
        name: "id",
        message: `What is the id of the ${role}?`,
      },
      {
        type: "input",
        name: "email",
        message: `What is the email of the ${role}?`,
        validate: email =>
        {
            if(email){
               return validateEmail(email);
            } else {
                console.log("\nEmail is required.\n");
                return false;
            }
        }
      },
    ]; 

    if (role === "manager"){
        var extra_questions = { 
            type: "input", 
            name: "office",
            message: `What is the ${role} office number?`,
        }; 
        questions.push(extra_questions); 
    } else if (role === "intern"){
        var extra_questions = { 
            type: "input", 
            name: "school",
            message: `What is the school of the ${role}?`,
        }; 
        questions.push(extra_questions); 
    } else if (role === "engineer"){
        var extra_questions = { 
            type: "input", 
            name: "username",
            message: `What is the github username of the ${role}?`,
        }; 
        questions.push(extra_questions); 
    }
    return questions;   
}

function rolePrompt(role){
    var questions = generateQuestions(role); 
    inquirer
    .prompt(questions)
    .then( (response) => {
        if(role === "manager"){
            const manager = new Manager(response.name, response.id, response.email, response.office);
            team.push(manager); 
        } else if (role === "intern"){
            const intern = new Intern(response.name, response.id, response.email, response.school); 
            team.push(intern); 
        } else if (role === 'engineer'){
            const engineer = new Engineer(response.name, response.id, response.email, response.username); 
            team.push(engineer); 
        }
        console.clear();
        menu();
  });

}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)){
        return true;
    }
    console.log("\nPlease enter a valid email.\n");
    return false;
}

function writeToFile(fileName, data) {
    let dir ="./dist"
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }


    html_data = generateMarkdown(data); 
    console.log(html_data); 
    fs.writeFileSync(`${dir}/${fileName}`, html_data, (err) => {
        if (err) {
            console.log(err)
        }
        });
}

async function menu() {
    //while (showMenu){
      const menu_options = [
        {
          type: "list",
          name: "menu",
          message: "What would you like to do?",
          choices: [
            "1. Add Intern",
            "2. Add Engineer",
            "3. Quit",
            ],
          loop: false,
        },
      ];
  
      inquirer
      .prompt(menu_options)
      .then( (response) => {
        console.clear();
        menuOption(response.menu);
    });
    //}
}

function menuOption(menu_choice){
    choice = Number(menu_choice.split(".")[0]);
  
    switch (choice) {
      case 1:
        rolePrompt("intern");
        break;
      case 2:
        rolePrompt("engineer");
        break;
      case 3:
        writeToFile(team[0].name +"-Team.html", team); 
        exit();
    }
}

function main(){
    rolePrompt("manager"); 
}

main(); 