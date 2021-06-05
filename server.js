const express = require('express')
const mongoose = require('mongoose')        // MongoDB object modeling tool designed to work in an asynchronous environment.
const bodyParser = require('body-parser')   //body parsing middleware (this is included in express itself -> app.use(express.json()))

const app = express()

//BodyParser middleware -> Returns middleware that only parses json
app.use(bodyParser.json())

// DB config
const db = require('./config/keys.js').mongoURI    //look at keys.js

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })       
    .then(() => {                               //promise used here -> see syntax
        console.log('MongoDB connected...');
    })
    .catch(err => {
        console.log(err);
    })

const port = process.env.PORT || 5000           //process.env.PORT is for live hosting in Horoku

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})