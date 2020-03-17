const express = require('express');
const bodyParser = require('body-parser');
const serverPort = 3000;

// creating the app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());

//defining the API home route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to NodeJs SQL ORM API" });
})

app.listen(serverPort, () => {
    console.log("Server is running on port " + serverPort);
});
