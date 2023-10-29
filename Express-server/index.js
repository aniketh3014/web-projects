import express from 'express';
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.get('/about', (req, res) => {
    res.send("i am a web developer");
})
app.get('/contact', (req, res) => {
    res.send("contact me at 1234567890");
})

app.get('/', (req, res) => {
    res.send("<h1>Hello i am aniket2<h1>");
})