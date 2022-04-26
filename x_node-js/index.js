const exp = require('constants');
const fs = require('fs');
const path = require('path');
const generateIndex = require('./utils/generateIndex');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to write file using the mini-project/folder name data
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    // Grab all folders names that meet criteria and format
    let foundFiles = fs.readdirSync('./').filter(file => file[0] === 'P');
    foundFiles = foundFiles.map(file => {
        let expandedItem = { title: file, link: '', path: '', screencap: '' };
        let assetFile = fs.readdirSync(`./${file}/assets/`);

        expandedItem.link = file.replaceAll(' ', '%20');
        expandedItem.path = file.replaceAll(' ', '_');
        expandedItem.screencap = `./${file}/assets/${assetFile[0]}`;

        return expandedItem;
    });
    writeToFile('README.md', generateMarkdown(foundFiles));
    writeToFile('index.html', generateIndex(foundFiles));
};

init();
