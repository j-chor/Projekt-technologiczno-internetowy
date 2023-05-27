console.log("Hi");

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get("/weather", (req, res) => {
    res.sendFile(path.resolve('./views/weather.html'))
})

app.listen(3000);

