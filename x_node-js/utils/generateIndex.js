// Create a function to generate Index for home page
function generateIndex(data) {
    const buildLink = (data) => {
        let listItems = data.map(file => {
            return `<div><a href="./${file.title}/public/">${file.title}</a></div>`;
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
        <div>
            <h1>Hello World 🤖🌎</h1>
            <hr />
        </div>
        <div class="container">
            ${buildLink(data)}
        </div>
        
    </body>
    </html>
        
  `
}

module.exports = generateIndex;
