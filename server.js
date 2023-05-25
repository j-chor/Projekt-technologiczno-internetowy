console.log("Hi");

const express = require('express');
const app = express();
const fs = require('fs');

app.set("view engine", "ejs");

const style = fs.readFileSync('views/styles.css');
app.get('/styles.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.send(style);
});

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000);

