const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// user questions for readme 
 async function userReadMeInfomation () {
  return inquirer.prompt([
    {
        message: "Enter Project Title",
        type: "input",
        name: "ProjectTitle"
    },
    {
        message: "Enter Description",
        type: "input",
        name: "Description"
    },
    {
        message: "Enter Screenshot Link",
        type: "input",
        name: "Screenshot"
    },
    {
        message: "Enter Table of Contents",
        type: "input",
        name: "Content"
    },
    {
        message: "Enter Installation",
        type: "input",
        name: "Installation"
    },
    {
        message: "Enter Usage",
        type: "input",
        name: "Usage"
    },
    {
        message: "Enter License",
        type: "list",
        name: "License",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
        ]
    },
    {
        message: "Enter Contributing",
        type: "input",
        name: "Contributing"
    },
    {
        message: "Enter Tests",
        type: "input",
        name: "Tests"
    },
    {
        message: "Enter Questions",
        type: "input",
        name: "Questions"
    },
    {
        message: "Enter User GitHub username",
        type: "input",
        name: "username",
        validate: function(answer)
        { if (answer == "") {
            return "You Must Enter Your GitHub Username";
        }
    return true;
        }    
            }, 
    {
        message: "Enter User GitHub email",
        type: "input",
        name: "email",
        validate: function(answer)
        { if (answer == "") {
            return "You Must Enter Your GitHub Email";
        }
    return true;
         }    
            }   
    
]);
}

async function makeReadme () {
console.log("Making ReadMe...")

const readmeUserData = await userReadMeInfomation ();
console.log(readmeUserData)

const readmeUserString = `
# ${readmeUserData.ProjectTitle}
${readmeUserData.Description}
${readmeUserData.Screenshot}
${readmeUserData.Content}
${readmeUserData.Installation}
${readmeUserData.Usage}
${readmeUserData.License}
${readmeUserData.Contributing}
${readmeUserData.Tests}
${readmeUserData.Questions}
${readmeUserData.username}
${readmeUserData.email}`

const FollowGitHub = `https://img.shields.io/github/followers/${username}}?label=Follow%20Me%20On%20GitHub&style=social`;

const result = await writeFileAsync('README.md',
readmeUserString,
)

console.log("Successfuly created ReadMe File");
};

makeReadme ()

