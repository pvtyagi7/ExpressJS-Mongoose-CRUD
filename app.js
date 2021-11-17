const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost/AlienDBex"

const app = express(); //start express

mongoose.connect(url, {useNewUrlParser: true}); //to connect to AlienDbex database written in url

const con = mongoose.connection; //To establish connection with database
app.use(express.json()); //To recieve request in json format

con.on('open', function(){//it will ececute when connecton with database is established
    console.log("Connected...");
});

const alienRouter = require('./routes/aliens');// file in which schema structure is defined
app.use('/aliens', alienRouter); //request from postman, comes to this middleware & it will send it to routes/aliens.js file written in above line


app.listen(9000, () => { //starts server on port no.9000
    console.log("Server started")
});