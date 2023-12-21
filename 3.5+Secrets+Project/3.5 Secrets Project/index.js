import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ILoveProgramming";
var isUser = false;

app.use(bodyParser.urlencoded({ extended: true }));

function athenticate(req, res, next) {
    if (req.body["password"] === password) {
        isUser = true;
    }
    next();
}
app.use(athenticate);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) =>{
    if (isUser) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});