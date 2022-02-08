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
    // Grab all folders names that meet criteria and format
    let foundFiles = fs.readdirSync('./').filter(file => file[0] === 'P');
    foundFiles = foundFiles.map(file => file.replaceAll(' ', '_'));
    console.log({ foundFiles });
    writeToFile('README.md', generateMarkdown(foundFiles));
};

init();
