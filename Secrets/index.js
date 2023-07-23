//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


//we can do without importing this bodyParser because this has been added in the express module itself
//then we need to replace bodyParser with express
import bodyParser from "body-parser";
import express from "express";

//to find out dynammically the directory address we need to add these code
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//create our app and assign our port
const app = express();
const port = 3000;

//using boydParser middleware to capture user input and use that into this programs
app.use(bodyParser.urlencoded({extended: true}));

//original password
var pass ="ILoveProgramming";


//every time there submit is clicked using post method and /check as in our html file,
    //we need to give a response like this
app.post("/check", (req, res) => {
    console.log(req.body);
    //we will check if entered passwrod is corect one, if it is then we render secret.html as response
    if(req.body["password"] === pass) {
        res.sendFile(__dirname + "/public/secret.html");
    } 
    //if password is incorrect we just render index.html agains
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
})

//rendering our index.html as homepage
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})


//starting our server and printing confirmation
app.listen(port, () => {
    console.log(`app is running at ${port}`);
})