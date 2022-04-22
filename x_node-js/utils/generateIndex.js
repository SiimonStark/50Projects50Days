// Create a function to generate Index for home page
function generateIndex(data) {
    const buildLink = (data) => {
        let listItems = data.map(file => {
            let screenShot = '';
            return `<div><img class="screencap" src="${file.screencap}" /><a href="./${file.title}/public/">${file.title}</a></div>`;
        });
        listItems = listItems.join(``).split(',');
        console.log({ listItems });
        return listItems;
    };

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./x_assets/styles/style.css">
        <title>50 Projects Link Tree</title>
    </head>

    <body>
        <header>
            <h1>Hello World 🤖🌎</h1>
            <hr />
        </header>
        <div class="container">
            ${buildLink(data)}
        </div>
        <footer>
            <div class="links">
                <a href="https://github.com/SiimonStark/50Projects50Days">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" alt="Github icon for repo"/>
                </a>
            </div>
            <div class="course">
                This project is a deviation from the course originally by Brad Traversy on 
                <a href="https://www.udemy.com/course/50-projects-50-days/learn/lecture/23594652#content"> Udemy</a>
            </div>
        </footer>
        
    </body>
    </html>
        
  `
}

module.exports = generateIndex;
