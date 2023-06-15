console.log("Hi");

const express = require('express');
const path = require('path');
const fs = require('fs');
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

app.get("/info", (req, res) => {
    res.sendFile(path.resolve('views/info.html'))
})

app.post("/send", (req, res) => {
    console.log(req.body)
    fs.appendFile('messages.txt', JSON.stringify(req.body) + '\n', (err) => {
        if (err) throw err;
        console.log('Zapisano wiadomość do pliku');
      });

    res.redirect("/")
})

app.listen(3000);
console.log("listening at port 3000")
console.log("localhost:3000/")

