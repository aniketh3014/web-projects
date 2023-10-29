import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        // ask user for url
        {
                message: "Enter the url you want to convert to a QR code: ",
                name: "URL",
        },
    ])

    .then((answers) => {
        // create qr code
        const url = answers.URL;
        var qr_png = qr.image(url);
        // save qr code to local file
        qr_png.pipe(fs.createWriteStream('ani.png', {type: 'image/png'}));
        fs.writeFile('url.txt', url, function (err) {
            if (err) throw err;
            console.log('Saved!');
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

  