// Create a function to generate markdown for README
function generateMarkdown(data) {
  const buildLink = (data) => {
    let listItems = data.map(file => {
      return `[${file.title}](https://github.com/SiimonStark/50Projects50Days/tree/main/${file.link})`;
    });
    listItems = listItems.join(`<br>`).split(',');
    console.log({ listItems });
    return listItems;
  };

  return `
# 50 Projects Challenge

### Live @ [Github Pages](https://siimonstark.github.io/50Projects50Days/)

## Description
In this repo we practice and focus on small aspects of design and interaction.These small mini projects serve as a reference and or inspiration that can be implemented into other projects down the road.

## List
This list contains quick links to each project within the folder tree of this project.
Each project has it's own brief ReadME + screencapture:

<hr>

${buildLink(data)}

<hr>

## Questions

If you have any questions about the repo, open an issue or contact me directly at siimonstark@gmail.com.You can find more of my work at [SiimonStark](https://github.com/siimonstark/).

`
}

module.exports = generateMarkdown;
