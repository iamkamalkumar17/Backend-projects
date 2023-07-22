import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        message: "Please type your URL",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL; 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('pic.png'));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The URL has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });