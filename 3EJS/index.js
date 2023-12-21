import express from 'express';

const app = express();
const port = 3000;


let Today = "To day is a weekday";
let advice = "you should go to work";



app.get('/', (req, res) => {
    const d = new Date();
    const day = d.getDay();
    if (day === 0 || day === 6) {
        Today = "To day is the weekend";
        advice = "you can chill out";
    }
    res.render("index.ejs", {
        today : Today,
        advice : advice,
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});