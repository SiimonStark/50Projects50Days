const fs = require('fs');
const path = require('path');
// const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to write file using the mini-project/folder name data
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    let foundFiles = fs.readdirSync('../').filter(file => file[0] === 'P');
    console.log({ foundFiles });
    writeToFile('README.md', generateMarkdown(foundFiles));
};

init();
