console.log("Hi");

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get("/weather", (req, res) => {
    res.sendFile(path.resolve('./views/weather.html'))
})

app.get("/form", (req, res) => {
    res.sendFile(path.resolve('views/form.html'))
})

app.post("/send", (req, res) => {
    console.log(req.body)
    res.send("Succesfull")
})

app.listen(3000);

